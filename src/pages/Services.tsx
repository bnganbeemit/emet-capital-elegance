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

      {/* Asset Finance */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Asset Finance</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Unlock the equipment and assets your business needs to grow. From heavy machinery 
                  to technology infrastructure, we provide flexible financing solutions that preserve 
                  your working capital.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Equipment finance for all industries
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Technology and software financing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Vehicle and fleet finance
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Medical and healthcare equipment
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
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold">$50K - $50M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Terms</span>
                      <span className="font-semibold">1-10 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Approval Time</span>
                      <span className="font-semibold">24-48 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Asset secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Debtor Finance */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Debtor Finance</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Transform your outstanding invoices into immediate working capital. Our debtor 
                  finance solutions provide the cash flow flexibility you need to take on larger 
                  contracts and grow your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Invoice factoring and discounting
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Trade finance solutions
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Confidential and disclosed facilities
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Credit protection options
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
                      <span className="text-muted-foreground">Advance Rate</span>
                      <span className="font-semibold">Up to 90%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Facility Size</span>
                      <span className="font-semibold">$100K - $20M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Setup Time</span>
                      <span className="font-semibold">5-10 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Debtor book</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Lending */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Structured Lending</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Complex financing requirements need sophisticated solutions. Our structured 
                  lending team designs bespoke facilities for unique situations, acquisitions, 
                  and growth initiatives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Management buyouts (MBO)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Acquisition finance
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Development finance
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mezzanine and hybrid structures
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
                      <span className="text-muted-foreground">Facility Size</span>
                      <span className="font-semibold">$1M - $100M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Terms</span>
                      <span className="font-semibold">2-15 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Structure</span>
                      <span className="font-semibold">Bespoke</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-semibold">Multi-asset</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep expertise across diverse sectors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <Factory className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
                <p className="text-muted-foreground">
                  Equipment finance, working capital, and expansion funding for manufacturers.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Retail & E-commerce</h3>
                <p className="text-muted-foreground">
                  Inventory finance, POS systems, and growth capital for retail businesses.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-2xl text-center hover-lift">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Professional Services</h3>
                <p className="text-muted-foreground">
                  Technology upgrades, office fit-outs, and practice acquisitions.
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