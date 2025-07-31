import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-hero" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your commercial finance requirements? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="luxury-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Smith" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="0400 000 000" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Company" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="financeType">Finance Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asset-finance">Asset Finance</SelectItem>
                            <SelectItem value="debtor-finance">Debtor Finance</SelectItem>
                            <SelectItem value="structured-lending">Structured Lending</SelectItem>
                            <SelectItem value="working-capital">Working Capital</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Loan Amount Required</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                          <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-20m">$5M - $20M</SelectItem>
                          <SelectItem value="20m+">$20M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your financing requirements..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button variant="premium" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      * Required fields. By submitting this form, you agree to our privacy policy.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="luxury-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">1300 EMET (3638)</p>
                        <p className="text-muted-foreground">+61 2 9000 0000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">info@emetcapital.com.au</p>
                        <p className="text-muted-foreground">enquiries@emetcapital.com.au</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          Level 15, 100 Miller Street<br />
                          North Sydney NSW 2060<br />
                          Australia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Need an urgent response? Call our direct line for immediate assistance.
                    </p>
                    <Button variant="luxury" className="w-full">
                      Call Now: 1300 EMET
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Sydney's business district
              </p>
            </div>
            
            <div className="luxury-card rounded-2xl overflow-hidden">
              <div className="bg-muted/20 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Level 15, 100 Miller Street, North Sydney NSW 2060
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;