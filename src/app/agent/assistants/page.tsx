"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Plus, 
  Search, 
  Mail,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Assistant {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinedDate: string;
}

const initialAssistants: Assistant[] = [
  { id: "1", name: "Jane Smith", email: "jane@example.com", role: "Field Assistant", status: "active", joinedDate: "2026-01-15" },
  { id: "2", name: "Mike Johnson", email: "mike@example.com", role: "Office Assistant", status: "active", joinedDate: "2026-02-01" },
  { id: "3", name: "Sarah Wilson", email: "sarah@example.com", role: "Marketing Assistant", status: "inactive", joinedDate: "2026-02-10" },
];

export default function ManageAssistantsPage() {
  const [assistants, setAssistants] = useState<Assistant[]>(initialAssistants);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newAssistant, setNewAssistant] = useState({ name: "", email: "", role: "" });

  const filteredAssistants = assistants.filter(
    (assistant) =>
      assistant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assistant.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAssistant = () => {
    const assistant: Assistant = {
      id: Date.now().toString(),
      name: newAssistant.name,
      email: newAssistant.email,
      role: newAssistant.role,
      status: "active",
      joinedDate: new Date().toISOString().split("T")[0],
    };
    setAssistants([...assistants, assistant]);
    setNewAssistant({ name: "", email: "", role: "" });
    setIsAddDialogOpen(false);
  };

  const handleDeleteAssistant = (id: string) => {
    setAssistants(assistants.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Assistants</h1>
          <p className="text-muted-foreground">
            Add, remove, and manage your team assistants
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Assistant
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Assistant</DialogTitle>
              <DialogDescription>
                Send an invitation to a new assistant to join your team.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={newAssistant.name}
                  onChange={(e) => setNewAssistant({ ...newAssistant, name: e.target.value })}
                  placeholder="Enter assistant's name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newAssistant.email}
                  onChange={(e) => setNewAssistant({ ...newAssistant, email: e.target.value })}
                  placeholder="Enter assistant's email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={newAssistant.role}
                  onChange={(e) => setNewAssistant({ ...newAssistant, role: e.target.value })}
                  placeholder="e.g., Field Assistant"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddAssistant} disabled={!newAssistant.name || !newAssistant.email}>
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search assistants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Assistants List */}
      <div className="grid gap-4">
        {filteredAssistants.map((assistant) => (
          <Card key={assistant.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-[#1E88E5]/10 text-[#1E88E5]">
                      {assistant.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{assistant.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {assistant.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium">{assistant.role}</p>
                    <p className="text-xs text-muted-foreground">
                      Joined {assistant.joinedDate}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      assistant.status === "active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    {assistant.status}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Role</DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDeleteAssistant(assistant.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssistants.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No assistants found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
