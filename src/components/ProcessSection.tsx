import { MessageSquare, FileText, Calculator, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "Discuss your requirements and financial objectives with our expert team.",
      number: "01"
    },
    {
      icon: FileText,
      title: "Proposal & Terms", 
      description: "Receive a tailored proposal with competitive terms and transparent pricing.",
      number: "02"
    },
    {
      icon: Calculator,
      title: "Assessment & Approval",
      description: "Our streamlined process ensures rapid assessment and approval within 48 hours.",
      number: "03"
    },
    {
      icon: CheckCircle,
      title: "Settlement & Support",
      description: "Swift settlement with ongoing relationship management and support.",
      number: "04"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined, transparent process designed for efficiency and exceptional outcomes.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </div>

                {/* Step Content */}
                <div className="luxury-card p-6 rounded-2xl text-center hover-lift">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Mobile Connector Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-border mx-auto mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to accelerate your business growth?
          </p>
          <button className="btn-premium px-8 py-4 rounded-2xl font-semibold text-lg hover-lift">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;