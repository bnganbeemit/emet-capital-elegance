import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, TrendingUp, FileText, DollarSign } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const Insights = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Sample insights data
  const insights: Article[] = [
    {
      id: '1',
      title: 'Commercial Property Investment Trends in 2024',
      excerpt: 'Discover the latest trends shaping Australia\'s commercial property investment landscape and how smart financing can maximize returns.',
      content: 'Full article content...',
      image: '/assets/commercial-property.jpg',
      author: 'Emet Capital Team',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      category: 'Property Finance',
      featured: true
    },
    {
      id: '2', 
      title: 'Equipment Finance: Maximizing Cash Flow for Growth',
      excerpt: 'Learn how strategic equipment financing can preserve working capital while enabling business expansion and technological upgrades.',
      content: 'Full article content...',
      image: '/assets/equipment-finance.jpg',
      author: 'Emet Capital Team',
      publishDate: '2024-01-10',
      readTime: '4 min read',
      category: 'Asset Finance',
      featured: false
    },
    {
      id: '3',
      title: 'Debtor Finance Solutions for Seasonal Businesses',
      excerpt: 'How invoice factoring can smooth cash flow challenges for businesses with seasonal revenue patterns.',
      content: 'Full article content...',
      image: '/assets/debtor-finance.jpg',
      author: 'Emet Capital Team',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'Working Capital',
      featured: false
    }
  ];

  const categories = ['All', 'Property Finance', 'Asset Finance', 'Working Capital', 'Market Analysis'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInsights = selectedCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const totalPages = Math.ceil(filteredInsights.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentInsights = filteredInsights.slice(startIndex, startIndex + articlesPerPage);

  const featuredInsight = insights.find(insight => insight.featured);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://emetcapital.com.au/' },
    { name: 'Insights', url: 'https://emetcapital.com.au/insights' }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Commercial Lending Insights & Market Analysis"
        description="Expert insights on commercial lending, asset finance, and business funding strategies from Australia's leading commercial finance specialists."
        path="/insights"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commercial Finance <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert analysis, market trends, and strategic insights from Australia's commercial lending specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredInsight && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Featured Insight</span>
              </div>
              
              <Card className="luxury-card hover-lift overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img 
                      src={featuredInsight.image} 
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {featuredInsight.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {featuredInsight.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredInsight.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(featuredInsight.publishDate).toLocaleDateString('en-AU')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredInsight.readTime}
                      </div>
                    </div>
                    <Button variant="premium" className="w-fit group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "premium" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentInsights.map((insight, index) => (
              <Card key={insight.id} className="luxury-card hover-lift overflow-hidden group fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {insight.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {insight.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(insight.publishDate).toLocaleDateString('en-AU')}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "premium" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;