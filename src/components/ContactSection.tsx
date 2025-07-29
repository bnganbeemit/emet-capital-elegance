import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="bg-gradient-primary bg-clip-text text-transparent">Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with our expert team for a tailored commercial finance solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="luxury-card p-8 rounded-2xl fade-in">
              <h3 className="text-2xl font-semibold mb-6">Start Your Application</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input 
                      placeholder="John"
                      className="h-12 rounded-xl border-border bg-input/50 focus:bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input 
                      placeholder="Smith"
                      className="h-12 rounded-xl border-border bg-input/50 focus:bg-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="john@company.com"
                    className="h-12 rounded-xl border-border bg-input/50 focus:bg-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Funding Amount</label>
                  <Input 
                    placeholder="e.g., $500,000"
                    className="h-12 rounded-xl border-border bg-input/50 focus:bg-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your requirements</label>
                  <Textarea 
                    placeholder="Describe your business and funding requirements..."
                    className="min-h-32 rounded-xl border-border bg-input/50 focus:bg-input resize-none"
                  />
                </div>

                <Button variant="premium" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our expert team is ready to discuss your commercial finance requirements. 
                  Contact us for a confidential consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">1800 EMET CAP</p>
                    <p className="text-muted-foreground">(1800 363 8227)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">enquiries@emetcapital.com.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Locations</h4>
                    <p className="text-muted-foreground">Sydney • Melbourne • Brisbane</p>
                    <p className="text-muted-foreground">Serving Australia-wide</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="luxury-card p-6 rounded-2xl">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all enquiries within 2 hours during business hours. 
                  For urgent matters, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;