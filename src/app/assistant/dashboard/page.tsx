"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, 
  MapPin, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

const stats = [
  { title: "Assigned Tasks", value: "12", icon: ClipboardList, change: "5 pending" },
  { title: "Signs Monitored", value: "8", icon: MapPin, change: "All active" },
  { title: "Completed Tasks", value: "45", icon: CheckCircle2, change: "This month" },
  { title: "Performance", value: "98%", icon: TrendingUp, change: "Above average" },
];

const myTasks = [
  { id: 1, title: "Install sign at 123 Main St", priority: "high", dueDate: "Today", status: "pending" },
  { id: 2, title: "Check sign battery at 456 Oak Ave", priority: "medium", dueDate: "Tomorrow", status: "pending" },
  { id: 3, title: "Remove sign from 789 Pine Rd", priority: "low", dueDate: "Mar 10", status: "pending" },
  { id: 4, title: "Update sign photos", priority: "medium", dueDate: "Mar 11", status: "completed" },
];

export default function AssistantDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {user?.name || "Assistant"}!</h1>
        <p className="text-muted-foreground">
          Here&apos;s your task overview for today.
        </p>
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
        {/* My Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Tasks</CardTitle>
              <CardDescription>Tasks assigned to you</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/assistant/tasks">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {myTasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium text-sm">{task.title}</p>
                      <p className="text-xs text-muted-foreground">Due {task.dueDate}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}
                  >
                    {task.status}
                  </span>
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
              <Link href="/assistant/tasks">
                View My Tasks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-between" asChild>
              <Link href="/assistant/signs">
                View Assigned Signs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-between" asChild>
              <Link href="/assistant/settings">
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
