import { Shield, Award, Users, TrendingUp } from "lucide-react";

const TrustSignals = () => {
  // Trust signals based on actual performance
  const trustMetrics = [
    {
      name: "Google Rating",
      value: "5.0",
      description: "Based on 19 reviews",
      icon: Award
    },
    {
      name: "Success Rate",
      value: "98%",
      description: "Application success rate",
      icon: TrendingUp
    },
    {
      name: "Avg. Deal Size",
      value: "$1M",
      description: "Sophisticated commercial lending",
      icon: Users
    },
    {
      name: "Processing Time",
      value: "48hr",
      description: "Average approval time",
      icon: Shield
    }
  ];

  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        {/* Excellence Statement */}
        <div className="text-center mt-16 fade-in">
          <div className="max-w-3xl mx-auto luxury-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Commercial Finance <span className="bg-gradient-primary bg-clip-text text-transparent">Excellence</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Delivering sophisticated commercial lending solutions with proven market expertise. 
              Our specialist focus ensures optimal outcomes for ambitious Australian businesses 
              seeking growth capital and strategic funding solutions.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Market Expertise</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Proven Results</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Client Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;