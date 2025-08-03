import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  path = '/', 
  image = '/og-image.jpg',
  type = 'website' 
}: SEOProps) => {
  const fullTitle = title.includes('Emet Capital') ? title : `${title} | Emet Capital`;
  const siteUrl = 'https://emetcapital.com.au';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="Emet Capital" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Article specific */}
      {type === 'article' && (
        <meta property="article:publisher" content="Emet Capital" />
      )}
    </Helmet>
  );
};