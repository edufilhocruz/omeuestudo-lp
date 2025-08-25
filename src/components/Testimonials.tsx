import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      content: "AlterAI transformed our marketing ROI by 400%. The AI-powered insights helped us identify opportunities we never knew existed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Dynamics",
      content: "The automation capabilities are incredible. We've saved 20+ hours per week while increasing our conversion rates by 250%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Manager",
      company: "StartupX",
      content: "From startup to scale-up, AlterAI adapted perfectly to our needs. The real-time analytics are a game-changer.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* DESIRE - Social Proof & Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="hero-gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that have transformed their marketing 
            with our AI-powered platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="glass-card p-8 rounded-2xl fade-in-up relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="fade-in-up">
            <div className="text-4xl font-bold hero-gradient-text mb-2">10k+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl font-bold hero-gradient-text mb-2">300%</div>
            <div className="text-muted-foreground">ROI Increase</div>
          </div>
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold hero-gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl font-bold hero-gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;