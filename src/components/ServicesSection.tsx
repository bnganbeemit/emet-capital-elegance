import { Building2, TrendingUp, FileCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Asset Finance",
      description: "Sophisticated equipment and property financing solutions tailored to your business requirements.",
      features: ["Equipment Financing", "Property Investment", "Cash Flow Solutions"]
    },
    {
      icon: TrendingUp,
      title: "Debtor Funding",
      description: "Unlock working capital with our premium debtor financing and invoice factoring services.",
      features: ["Invoice Factoring", "Trade Finance", "Working Capital"]
    },
    {
      icon: FileCheck,
      title: "Structured Lending",
      description: "Complex commercial transactions made simple with our bespoke structured finance solutions.",
      features: ["Development Finance", "Acquisition Funding", "Refinancing"]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision-engineered commercial finance solutions designed for ambitious Australian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="luxury-card p-8 rounded-2xl hover-lift fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;