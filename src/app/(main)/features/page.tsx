import { MapPin, BarChart3, Users, Bell, Shield, Smartphone, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time GPS tracking for all your real estate signs. Know exactly where each sign is located at all times.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive analytics dashboard showing sign performance, placement effectiveness, and ROI metrics.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Manage your entire team with role-based access. Assign assistants and track their activities.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get instant alerts for sign movement, low battery, or when signs need maintenance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to keep your data safe and compliant.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Full-featured iOS and Android apps for managing signs on the go.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Get started in minutes with our easy-to-use setup process and intuitive interface.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring ensures you never miss important sign activity.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your real estate signs effectively and grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#1E88E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#1E88E5]/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-[#1E88E5]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
