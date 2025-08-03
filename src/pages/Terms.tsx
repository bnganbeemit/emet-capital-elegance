import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const Terms = () => {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://emetcapital.com.au/' },
    { name: 'Terms & Conditions', url: 'https://emetcapital.com.au/terms' }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Terms & Conditions"
        description="Terms and conditions for using Emet Capital's commercial lending services and website, including service agreements and user responsibilities."
        path="/terms"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Effective Date: January 1, 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Emet Capital website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Emet Capital provides commercial lending brokerage services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Asset finance and equipment lending</li>
                  <li>Debtor funding and invoice factoring</li>
                  <li>Structured commercial lending solutions</li>
                  <li>Financial advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are available to Australian businesses and entities that meet our eligibility criteria. You must provide accurate and complete information during the application process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Application Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When applying for our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete financial information</li>
                  <li>Submit required documentation in a timely manner</li>
                  <li>Allow us to conduct necessary credit checks and verifications</li>
                  <li>Respond promptly to requests for additional information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Fees and Charges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our fees and charges will be disclosed to you before you agree to proceed with any service. Fees may include brokerage fees, application fees, and ongoing service charges as applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Privacy and Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to protecting your privacy and confidential information. Please refer to our Privacy Policy for detailed information about how we handle your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide excellent service, we cannot guarantee specific outcomes. Our liability is limited to the extent permitted by Australian law, and we are not responsible for decisions made by third-party lenders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, and software, is owned by Emet Capital and protected by intellectual property laws. You may not reproduce or distribute this content without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service relationship at any time with appropriate notice. Termination does not affect any obligations that arose before termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of Australia. Any disputes will be resolved in the appropriate Australian courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: info@emetcapital.com.au</p>
                  <p>Phone: 0485 952 651</p>
                  <p>Website: www.emetcapital.com.au</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a new effective date. Continued use of our services constitutes acceptance of the revised terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;