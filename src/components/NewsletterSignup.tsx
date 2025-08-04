import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive the latest market insights in your inbox.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <Card className="luxury-card">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">You're subscribed!</h3>
          <p className="text-muted-foreground text-sm">
            Thanks for subscribing. You'll receive market insights and exclusive content.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="luxury-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Market Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest commercial lending insights
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50"
          />
          <Button 
            type="submit" 
            className="w-full" 
            variant="premium"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe for Free"}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-3 text-center">
          No spam. Unsubscribe anytime. Privacy policy applies.
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;