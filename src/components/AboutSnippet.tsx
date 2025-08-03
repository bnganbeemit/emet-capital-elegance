import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LinkedinIcon, Award, Users } from "lucide-react";

const AboutSnippet = () => {
  const teamMembers = [
    {
      name: "David Mitchell",
      role: "Principal & Founder",
      experience: "15+ years commercial finance",
      image: "/assets/team/david-mitchell.jpg",
      linkedin: "https://linkedin.com/in/davidmitchell",
      specialties: ["Structured Lending", "Asset Finance"]
    },
    {
      name: "Sarah Rodriguez", 
      role: "Senior Finance Broker",
      experience: "12+ years banking & finance",
      image: "/assets/team/sarah-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/sarahrodriguez",
      specialties: ["Debtor Funding", "Working Capital"]
    },
    {
      name: "James Chen",
      role: "Credit Analyst",
      experience: "8+ years credit assessment", 
      image: "/assets/team/james-chen.jpg",
      linkedin: "https://linkedin.com/in/jameschen",
      specialties: ["Risk Assessment", "Due Diligence"]
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

            {/* Team Grid */}
            <div className="grid gap-6">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="luxury-card hover-lift group fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                          {/* Placeholder avatar using initials */}
                          <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-semibold text-lg">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <LinkedinIcon className="h-3 w-3 text-primary-foreground" />
                        </a>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-1">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                        
                        {/* Specialties */}
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
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