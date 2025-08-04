import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoanCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  loanTerm: number;
}

const BridgingLoanCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [calculation, setCalculation] = useState<LoanCalculation | null>(null);
  const { toast } = useToast();

  const calculateLoan = () => {
    const purchase = parseFloat(purchasePrice.replace(/,/g, ''));
    const sale = parseFloat(salePrice.replace(/,/g, ''));
    const loan = parseFloat(loanAmount.replace(/,/g, ''));

    if (!purchase || !sale || !loan) {
      toast({
        title: "Invalid input",
        description: "Please enter valid amounts for all fields.",
        variant: "destructive",
      });
      return;
    }

    if (loan > purchase * 0.8) {
      toast({
        title: "Loan amount too high",
        description: "Bridging loans typically don't exceed 80% of purchase price.",
        variant: "destructive",
      });
      return;
    }

    // Typical bridging loan parameters
    const annualRate = 0.12; // 12% annual rate
    const monthlyRate = annualRate / 12;
    const termMonths = 12; // 12 month term
    
    // Calculate monthly payment using standard loan formula
    const monthlyPayment = loan * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                          (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    const totalCost = monthlyPayment * termMonths;
    const totalInterest = totalCost - loan;

    setCalculation({
      monthlyPayment,
      totalInterest,
      totalCost,
      loanTerm: termMonths
    });

    // GA4 custom event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'calculator_usage', {
        event_category: 'engagement',
        event_label: 'bridging_loan_calculator',
        value: loan
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleInputChange = (value: string, setter: (value: string) => void) => {
    // Remove non-numeric characters except commas and periods
    const cleaned = value.replace(/[^\d.,]/g, '');
    setter(cleaned);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl">
            Bridging Loan Calculator
          </CardTitle>
          <p className="text-muted-foreground">
            Calculate your bridging loan costs and monthly repayments
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="purchase-price">Purchase Price (AUD)</Label>
                <Input
                  id="purchase-price"
                  placeholder="e.g., 800,000"
                  value={purchasePrice}
                  onChange={(e) => handleInputChange(e.target.value, setPurchasePrice)}
                />
              </div>
              
              <div>
                <Label htmlFor="sale-price">Expected Sale Price (AUD)</Label>
                <Input
                  id="sale-price"
                  placeholder="e.g., 950,000"
                  value={salePrice}
                  onChange={(e) => handleInputChange(e.target.value, setSalePrice)}
                />
              </div>
              
              <div>
                <Label htmlFor="loan-amount">Loan Amount Needed (AUD)</Label>
                <Input
                  id="loan-amount"
                  placeholder="e.g., 640,000"
                  value={loanAmount}
                  onChange={(e) => handleInputChange(e.target.value, setLoanAmount)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Typically up to 80% of purchase price
                </p>
              </div>
              
              <Button 
                onClick={calculateLoan} 
                className="w-full" 
                variant="premium"
              >
                Calculate Loan Terms
              </Button>
            </div>
            
            {/* Results Section */}
            <div className="space-y-4">
              {calculation ? (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-card/50 rounded-xl">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Payment</p>
                        <p className="text-xl font-bold">{formatCurrency(calculation.monthlyPayment)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-card/50 rounded-xl">
                      <Calendar className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Loan Term</p>
                        <p className="text-xl font-bold">{calculation.loanTerm} months</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-card/50 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Interest</p>
                        <p className="text-xl font-bold">{formatCurrency(calculation.totalInterest)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                    <p className="text-sm font-medium mb-2">💡 Calculation Notes:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Based on 12% annual interest rate (typical for bridging loans)</li>
                      <li>• 12-month loan term standard</li>
                      <li>• Interest-only payments may be available</li>
                      <li>• Exit fees and establishment fees not included</li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your loan details to see calculations</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-primary/10 rounded-xl">
            <h4 className="font-semibold mb-2">Ready to Apply?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get expert advice on bridging loans and secure competitive rates for your property purchase.
            </p>
            <Button variant="premium" size="sm">
              Speak to a Specialist
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BridgingLoanCalculator;