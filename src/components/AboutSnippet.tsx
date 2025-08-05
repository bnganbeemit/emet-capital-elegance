import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LinkedinIcon, Award, Users } from "lucide-react";

const AboutSnippet = () => {
  const expertise = [
    {
      title: "Asset Finance",
      description: "Equipment and machinery funding solutions",
      icon: "🏗️",
      years: "15+"
    },
    {
      title: "Working Capital", 
      description: "Cash flow and operational funding",
      icon: "💼",
      years: "12+"
    },
    {
      title: "Structured Finance",
      description: "Complex commercial lending solutions",
      icon: "🏢",
      years: "18+"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built by Industry{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Insiders</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Backed by deep expertise and decades of combined experience in Australian commercial finance, 
                Emet Capital was founded by industry veterans who understand the challenges businesses face 
                when securing funding.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry Expertise</h3>
                    <p className="text-sm text-muted-foreground">40+ years combined experience in commercial finance and banking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Client-First Approach</h3>
                    <p className="text-sm text-muted-foreground">Dedicated to delivering exceptional outcomes for every client</p>
                  </div>
                </div>
              </div>

              <Button variant="premium" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Expertise Areas */}
            <div className="grid gap-6">
              {expertise.map((area, index) => (
                <Card 
                  key={index} 
                  className="luxury-card hover-lift group fade-in text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">{area.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-xs font-medium text-primary">{area.years} years experience</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;