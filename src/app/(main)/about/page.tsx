import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower real estate professionals with innovative tools that simplify sign management and maximize marketing effectiveness.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' success, providing exceptional support and continuously improving based on their feedback.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of data security and privacy, earning the trust of thousands of real estate professionals.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that keep our customers ahead of the competition.",
  },
];

const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "500,000+", label: "Signs Tracked" },
  { number: "50+", label: "States Covered" },
  { number: "99.9%", label: "Uptime" },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About InstaSignTracker</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to revolutionize how real estate professionals manage their signage. 
            Founded in 2020, we&apos;ve grown from a small startup to a trusted partner for thousands of agents nationwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-[#1E88E5] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[#1E88E5]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented individuals who are passionate about real estate technology 
            and want to make a difference in the industry.
          </p>
          <p className="text-muted-foreground">
            Check out our open positions at{" "}
            <a href="#" className="text-[#1E88E5] hover:underline">
              careers.instasigntracker.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
