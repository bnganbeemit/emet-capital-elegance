import { Button } from "@/components/ui/button";
import financialSkyline from "@/assets/financial-skyline.jpg";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={financialSkyline} 
          alt="Financial District" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bespoke Commercial Lending,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertly Engineered
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Australia-wide, asset-backed solutions that scale with your ambition. 
            Premium commercial finance engineered for exceptional outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="premium" size="xl" className="group">
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="luxury" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 fade-in">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by Australia's Leading Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="px-6 py-2 glass rounded-xl">
              <span className="text-sm font-medium">$500M+</span>
              <span className="text-xs text-muted-foreground ml-2">Funded</span>
            </div>
            <div className="px-6 py-2 glass rounded-xl">
              <span className="text-sm font-medium">48hr</span>
              <span className="text-xs text-muted-foreground ml-2">Approval</span>
            </div>
            <div className="px-6 py-2 glass rounded-xl">
              <span className="text-sm font-medium">98%</span>
              <span className="text-xs text-muted-foreground ml-2">Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;