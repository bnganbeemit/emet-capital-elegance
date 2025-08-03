import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      company: 'Melbourne Manufacturing',
      role: 'Managing Director',
      content: 'Emet Capital delivered exactly what they promised - quick approval, competitive rates, and exceptional service. Their structured lending solution enabled our expansion into new markets ahead of schedule.',
      rating: 5,
      image: '/assets/testimonial-1.jpg'
    },
    {
      id: '2',
      name: 'Michael Thompson',
      company: 'Thompson Logistics',
      role: 'CEO',
      content: 'The asset finance package from Emet Capital was perfectly tailored to our fleet expansion needs. Professional, efficient, and delivered results when traditional banks couldn\'t.',
      rating: 5,
      image: '/assets/testimonial-2.jpg'
    },
    {
      id: '3',
      name: 'Jennifer Walsh',
      company: 'Walsh Construction',
      role: 'Finance Director',
      content: 'Outstanding debtor funding solution that transformed our cash flow. Emet Capital\'s expertise in commercial finance is unmatched - they truly understand business needs.',
      rating: 5,
      image: '/assets/testimonial-3.jpg'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why Australia's leading businesses trust Emet Capital for their commercial lending needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="luxury-card relative overflow-hidden">
            <CardContent className="p-12 md:p-16">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-center mb-12 leading-relaxed font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {currentTestimonial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="text-center md:text-left">
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-primary font-medium">{currentTestimonial.role}</div>
                  <div className="text-muted-foreground">{currentTestimonial.company}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;