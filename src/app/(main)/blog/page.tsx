import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "10 Ways to Maximize Your Real Estate Sign ROI",
    excerpt: "Learn proven strategies to get the most out of your real estate signage investment and attract more qualified leads.",
    author: "Sarah Johnson",
    date: "Mar 5, 2026",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    title: "The Future of Real Estate Marketing",
    excerpt: "Discover how technology is transforming the way agents market properties and engage with potential buyers.",
    author: "Michael Chen",
    date: "Mar 3, 2026",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400&q=80",
  },
  {
    title: "Building a High-Performing Real Estate Team",
    excerpt: "Expert tips on recruiting, training, and managing assistants to grow your real estate business effectively.",
    author: "Emily Rodriguez",
    date: "Feb 28, 2026",
    category: "Management",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
  },
  {
    title: "Seasonal Sign Placement Strategies",
    excerpt: "How to optimize your sign placement throughout the year to match market conditions and buyer behavior.",
    author: "David Kim",
    date: "Feb 25, 2026",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80",
  },
  {
    title: "Digital vs. Traditional Marketing for Agents",
    excerpt: "Finding the right balance between online marketing and traditional methods like signage for maximum impact.",
    author: "Lisa Thompson",
    date: "Feb 20, 2026",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    title: "Case Study: How One Agent Doubled Their Listings",
    excerpt: "An in-depth look at how strategic sign management helped transform a struggling agent's business.",
    author: "James Wilson",
    date: "Feb 18, 2026",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">InstaSignTracker Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and strategies for real estate professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="group overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="px-2 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-[#1E88E5] transition-colors">
                  <Link href="#">{post.title}</Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
