import Link from "next/link";
import { ArrowRight, MapPin, BarChart3, Users, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your real estate signs in real-time with GPS precision.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Get insights into sign performance and placement effectiveness.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage assistants and collaborate with your team seamlessly.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security to protect your data.",
  },
];

const testimonials = [
  {
    quote: "InstaSignTracker has revolutionized how we manage our real estate signs. It's a game-changer!",
    author: "Sarah Johnson",
    role: "Real Estate Agent, LA",
  },
  {
    quote: "The analytics dashboard gives me insights I never had before. Highly recommended!",
    author: "Michael Chen",
    role: "Property Manager, NYC",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Smart Real Estate
                <span className="text-[#1E88E5]"> Sign </span>
                Management
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Streamline your real estate sign tracking with our innovative solution. 
                Manage placements, track performance, and collaborate with your team—all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/auth/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Real estate sign"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-[#1E88E5]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose InstaSignTracker?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your real estate signs effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#1E88E5]/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-[#1E88E5]" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of real estate professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardContent className="p-6">
                  <Zap className="h-6 w-6 text-[#1E88E5] mb-4" />
                  <p className="mb-4 text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E88E5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Sign Management?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of real estate professionals who trust InstaSignTracker
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/signup">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
