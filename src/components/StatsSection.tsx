import { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      label: "Approval Speed", 
      value: 95, 
      suffix: "%", 
      description: "Within 48 hours" 
    },
    { 
      label: "Deal Success Rate", 
      value: 98, 
      suffix: "%", 
      description: "Client satisfaction" 
    },
    { 
      label: "Average Deal Size", 
      value: 2.5, 
      suffix: "M", 
      prefix: "$", 
      description: "Commercial transactions" 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Emet Capital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by industry insiders, backed by deep expertise. Our track record speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="luxury-card p-8 text-center rounded-2xl hover-lift fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{stat.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="progress-luxury relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1500 ease-out"
                  style={{ 
                    width: isVisible ? `${stat.value}%` : '0%',
                    transitionDelay: `${index * 300}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center fade-in">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            As Seen In & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="glass px-8 py-4 rounded-xl">
                <div className="text-sm font-medium">Partner {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;