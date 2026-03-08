import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const signs = [
  { id: "1", address: "123 Main St", city: "Los Angeles", status: "active", views: 245 },
  { id: "2", address: "456 Oak Ave", city: "San Francisco", status: "active", views: 189 },
  { id: "3", address: "789 Pine Rd", city: "San Diego", status: "maintenance", views: 0 },
];

export default function AgentSignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Signs</h1>
          <p className="text-muted-foreground">Manage your real estate signs</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Sign
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search signs..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {signs.map((sign) => (
          <Card key={sign.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#1E88E5]/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#1E88E5]" />
                  </div>
                  <div>
                    <p className="font-medium">{sign.address}</p>
                    <p className="text-sm text-muted-foreground">{sign.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{sign.views} views</span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      sign.status === "active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {sign.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
