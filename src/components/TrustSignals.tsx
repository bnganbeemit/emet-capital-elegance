import { Shield, Award, Users, TrendingUp } from "lucide-react";

const TrustSignals = () => {
  const partners = [
    {
      name: "AFCA Member",
      logo: "/assets/logos/afca-logo.svg",
      description: "Australian Financial Complaints Authority"
    },
    {
      name: "ASIC Regulated",
      logo: "/assets/logos/asic-logo.svg", 
      description: "Australian Securities & Investments Commission"
    },
    {
      name: "CPA Australia",
      logo: "/assets/logos/cpa-logo.svg",
      description: "Certified Practicing Accountants"
    },
    {
      name: "Finance Brokers Association",
      logo: "/assets/logos/fba-logo.svg",
      description: "Professional Industry Association"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "$500M+",
      label: "Loans Facilitated",
      description: "Total funding delivered to Australian businesses"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Businesses we've helped grow and succeed"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "Applications successfully funded"
    },
    {
      icon: Shield,
      value: "48hr",
      label: "Avg. Approval",
      description: "Industry-leading turnaround times"
    }
  ];

  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold mb-2">Regulated & Accredited</h3>
          <p className="text-muted-foreground mb-8">
            Licensed and regulated by Australian financial authorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-xl hover:bg-card/50 transition-colors duration-300 fade-in"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-muted/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {/* Placeholder for partner logo */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="text-sm font-medium mb-1">{partner.name}</div>
              <div className="text-xs text-muted-foreground">{partner.description}</div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="text-center mt-16 fade-in">
          <div className="max-w-3xl mx-auto luxury-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Industry <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Emet Capital is a fully licensed Australian Financial Services provider, 
              regulated by ASIC and committed to the highest standards of professional conduct. 
              Our team brings decades of combined experience in commercial finance and banking.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">ASIC Licensed</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">AFCA Member</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">PI Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;