import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://emetcapital.com.au/' },
    { name: 'Privacy Policy', url: 'https://emetcapital.com.au/privacy-policy' }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Privacy Policy"
        description="Emet Capital's privacy policy outlining how we collect, use, and protect your personal information in accordance with Australian privacy laws."
        path="/privacy-policy"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Effective Date: January 1, 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Emet Capital ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-3 text-foreground">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact information (name, email address, phone number, business address)</li>
                  <li>Business and financial information for loan applications</li>
                  <li>Identification documents as required by law</li>
                  <li>Credit history and financial statements</li>
                  <li>Website usage data and cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Processing loan applications and providing financial services</li>
                  <li>Conducting credit checks and risk assessments</li>
                  <li>Communicating with you about our services</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our website and services</li>
                  <li>Marketing our services (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Information Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may disclose your personal information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Lenders and financial institutions for loan processing</li>
                  <li>Credit reporting agencies as permitted by law</li>
                  <li>Professional advisors and service providers</li>
                  <li>Government agencies as required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under Australian privacy law, you have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Complain about our handling of your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: privacy@emetcapital.com.au</p>
                  <p>Phone: 0485 952 651</p>
                  <p>Address: Australia</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with a new effective date.
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

export default PrivacyPolicy;