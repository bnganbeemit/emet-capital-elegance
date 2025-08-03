import { Helmet } from 'react-helmet-async';

interface OrganizationDataProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}

export const OrganizationStructuredData = ({ 
  name = "Emet Capital",
  description = "Australia's premier commercial lending brokerage specializing in asset finance, debtor funding, and structured lending solutions.",
  url = "https://emetcapital.com.au",
  logo = "https://emetcapital.com.au/logo.png",
  contactPoint = {
    telephone: "+61485952651",
    contactType: "customer service"
  }
}: OrganizationDataProps) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "contactType": contactPoint.contactType
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Lending Services",
      "itemListElement": [
        {
          "@type": "FinancialProduct",
          "name": "Asset Finance",
          "description": "Equipment and property financing solutions"
        },
        {
          "@type": "FinancialProduct", 
          "name": "Debtor Funding",
          "description": "Invoice factoring and working capital solutions"
        },
        {
          "@type": "FinancialProduct",
          "name": "Structured Lending", 
          "description": "Complex commercial transaction financing"
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbStructuredData = ({ items }: BreadcrumbDataProps) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};