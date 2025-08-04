import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import BridgingLoanCalculator from "@/components/BridgingLoanCalculator";
import ReadingProgress from "@/components/ReadingProgress";

const BridgingLoanCalculatorPage = () => {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://emetcapital.com.au/' },
    { name: 'Insights', url: 'https://emetcapital.com.au/insights' },
    { name: 'Bridging Loan Calculator', url: 'https://emetcapital.com.au/insights/bridging-loan-calculator' }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Bridging Loan Calculator - Calculate Your Costs & Repayments"
        description="Interactive bridging loan calculator. Calculate your monthly payments, interest costs, and loan terms for Australian commercial property finance."
        path="/insights/bridging-loan-calculator"
        type="article"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <ReadingProgress />
      
      <Navigation />
      
      <main id="main-content">
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bridging Loan <span className="bg-gradient-primary bg-clip-text text-transparent">Calculator</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Calculate your bridging loan costs, monthly repayments, and total interest with our interactive calculator.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <BridgingLoanCalculator />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BridgingLoanCalculatorPage;