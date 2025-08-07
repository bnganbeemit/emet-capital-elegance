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
        {/* Single Trust Metrics Section */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold mb-2">Comprehensive Commercial Finance Solutions</h3>
          <p className="text-muted-foreground mb-8">
            Private lending • Bridging finance • Asset-based lending • Mortgages • Property development • Working capital
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {trustMetrics.map((metric, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-xl hover:bg-card/50 transition-colors duration-300 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="font-semibold mb-1">{metric.name}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>

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