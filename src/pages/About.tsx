import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import businessMeeting from "@/assets/business-meeting.jpg";
import { ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={businessMeeting} 
            alt="Business Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Emet Capital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Built by industry insiders, backed by deep expertise. We're redefining commercial finance in Australia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded by seasoned finance professionals who understood the gap in the Australian 
                  commercial lending market, Emet Capital was born from a simple yet powerful vision: 
                  to provide bespoke financial solutions that truly scale with our clients' ambitions.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With over 50 years of combined experience in commercial finance, our founding team 
                  has facilitated over $2 billion in transactions across diverse industries and asset classes.
                </p>
                <Button variant="premium" size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="luxury-card p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                      <div className="text-sm text-muted-foreground">Total Funded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Deals Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24hr</div>
                      <div className="text-sm text-muted-foreground">Initial Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision and relationship we build
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We deliver exceptional outcomes through meticulous attention to detail and unwavering quality standards.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Partnership</h3>
                <p className="text-muted-foreground">
                  We believe in building long-term relationships based on trust, transparency, and mutual success.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Precision</h3>
                <p className="text-muted-foreground">
                  Every solution is carefully crafted to meet the unique requirements of each client's situation.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our processes and solutions to stay ahead in the dynamic finance landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">MJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
                <p className="text-primary mb-4">Managing Director</p>
                <p className="text-muted-foreground text-sm">
                  25+ years in commercial finance with expertise in structured lending and asset finance across multiple industries.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">SC</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-primary mb-4">Head of Credit</p>
                <p className="text-muted-foreground text-sm">
                  15+ years in credit assessment and risk management, formerly with major Australian banks and finance institutions.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">DP</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">David Palmer</h3>
                <p className="text-primary mb-4">Business Development Director</p>
                <p className="text-muted-foreground text-sm">
                  20+ years building client relationships and developing innovative finance solutions for Australian businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;