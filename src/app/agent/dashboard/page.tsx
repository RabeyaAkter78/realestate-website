"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  AlertCircle,
  Plus,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

const stats = [
  { title: "Total Signs", value: "24", icon: MapPin, change: "+3 this week" },
  { title: "Active Assistants", value: "5", icon: Users, change: "+1 new" },
  { title: "Sign Views", value: "1,234", icon: TrendingUp, change: "+12%" },
  { title: "Alerts", value: "3", icon: AlertCircle, change: "Requires attention" },
];

const recentActivity = [
  { action: "New sign placed", location: "123 Main St", time: "2 hours ago" },
  { action: "Assistant added", location: "John Doe", time: "5 hours ago" },
  { action: "Sign maintenance", location: "456 Oak Ave", time: "1 day ago" },
  { action: "View spike detected", location: "789 Pine Rd", time: "2 days ago" },
];

export default function AgentDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name || "Agent"}!</h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your signs today.
          </p>
        </div>
        <Button asChild>
          <Link href="/agent/assistants">
            <Plus className="mr-2 h-4 w-4" />
            Add Assistant
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="p-2 bg-[#1E88E5]/10 rounded-lg">
                  <stat.icon className="h-5 w-5 text-[#1E88E5]" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-between" asChild>
              <Link href="/agent/signs">
                Manage Signs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-between" asChild>
              <Link href="/agent/assistants">
                Manage Assistants
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-between" asChild>
              <Link href="/agent/settings">
                Settings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
