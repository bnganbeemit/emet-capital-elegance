import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Truck, Factory, ShoppingCart, Briefcase, Calculator } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-hero" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive commercial finance solutions tailored to your industry and growth stage
          </p>
        </div>
      </section>

      {/* Private Lending */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Private Lending</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Emet Capital, we offer private lending services as a great alternative to traditional bank loans. We provide quick access to funds with flexible terms tailored to your needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Credit decision within a day
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Flexible terms tailored to your needs
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Fast access to funds
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Alternative to traditional bank loans
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Decision Time</span>
                      <span className="font-semibold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Funding Speed</span>
                      <span className="font-semibold">Within 48 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Terms</span>
                      <span className="font-semibold">Flexible</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-semibold">Asset-backed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bridging Finance */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging Finance</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our bridging loans provide short-term financing to help you cover the gap between buying a new property and selling your current one.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Short-term property financing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Bridge purchase and sale gaps
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Fast approval process
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Competitive rates
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative md:order-1">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Purpose</span>
                      <span className="font-semibold">Property transitions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">Short-term</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Approval</span>
                      <span className="font-semibold">Fast processing</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Property secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset-Based Lending */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Asset-Based Lending</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Emet Capital, our asset-based lending solutions help businesses use their assets to get the funding they need. This funding can drive growth, improve cash flow, or allow you to seize new opportunities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Use property, equipment, or inventory as collateral
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Improve cash flow for business needs
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Growth opportunities and expansion
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Secured financing based on asset value
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Collateral</span>
                      <span className="font-semibold">Property & assets</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Purpose</span>
                      <span className="font-semibold">Growth & cash flow</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Benefits</span>
                      <span className="font-semibold">Secured financing</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Application</span>
                      <span className="font-semibold">Business expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First and Second Mortgage */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">First and Second Mortgage</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you are refinancing your first mortgage, or topping up on top of an existing mortgage, we can help.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    First mortgage refinancing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Second mortgage top-ups
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Flexible lending solutions
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Competitive rates and terms
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative md:order-1">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-semibold">1st & 2nd mortgages</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Purpose</span>
                      <span className="font-semibold">Refinancing & top-ups</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Property secured</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Terms</span>
                      <span className="font-semibold">Flexible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Property Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial Property Development</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Unlock new opportunities with our private lending solutions. We provide fast and flexible private loans in Australia for individuals and businesses seeking alternatives to traditional bank financing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Quick funding to seize immediate opportunities
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Customized solutions tailored to your needs
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Accessible financing for non-bank criteria
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Alternative to traditional bank financing
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Focus</span>
                      <span className="font-semibold">Commercial development</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Speed</span>
                      <span className="font-semibold">Quick funding</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Customization</span>
                      <span className="font-semibold">Tailored solutions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Alternative</span>
                      <span className="font-semibold">Non-bank lending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Capital */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Working Capital</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Navigate property transactions smoothly with our bridging loans. Perfect for investors and homeowners needing short-term financing during transitional periods.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Immediate capital for property transactions
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Flexible repayment terms
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Competitive rates for investments
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Maximize returns on property investments
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative md:order-1">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-semibold">Working capital</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Use Case</span>
                      <span className="font-semibold">Property transactions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Timeline</span>
                      <span className="font-semibold">Immediate funding</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Returns</span>
                      <span className="font-semibold">Maximized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Investment/Expansion */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Investment/Expansion</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Empower your business growth with our asset-based lending solutions. Secure financing based on the value of your assets.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Use property, equipment, or inventory as collateral
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Access working capital for expansion and operations
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Investment in new projects or markets
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Confidence of secured financing
                  </li>
                </ul>
                <Button variant="premium" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Focus</span>
                      <span className="font-semibold">Business growth</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Collateral</span>
                      <span className="font-semibold">Asset-based</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Purpose</span>
                      <span className="font-semibold">Expansion & investment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Asset secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive lending solutions for all your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <Building className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Equity Release</h3>
                <p className="text-muted-foreground">
                  Unlock the equity in your property to access funds for various purposes while maintaining ownership.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
                <p className="text-muted-foreground">
                  Flexible business loan solutions designed to support your operational needs and growth objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our finance specialists are ready to discuss your requirements and design 
              a solution that fits your business perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="premium" size="xl" className="group">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="luxury" size="xl">
                Speak to a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;