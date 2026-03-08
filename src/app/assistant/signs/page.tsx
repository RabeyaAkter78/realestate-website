import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Battery, Signal } from "lucide-react";

const assignedSigns = [
  { id: "1", address: "123 Main St", city: "Los Angeles", status: "active", battery: 85, signal: 95 },
  { id: "2", address: "456 Oak Ave", city: "San Francisco", status: "active", battery: 62, signal: 88 },
  { id: "4", address: "321 Elm St", city: "Oakland", status: "active", battery: 91, signal: 92 },
];

export default function AssistantSignsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Assigned Signs</h1>
        <p className="text-muted-foreground">Signs you are responsible for monitoring</p>
      </div>

      <div className="grid gap-4">
        {assignedSigns.map((sign) => (
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
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Battery className="h-4 w-4" />
                    {sign.battery}%
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Signal className="h-4 w-4" />
                    {sign.signal}%
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
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
