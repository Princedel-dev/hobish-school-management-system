import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Search } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Mrs. Johnson",
    relation: "Parent of Alice",
    lastMessage: "Thank you for the update!",
    time: "2h ago",
    unread: 0,
  },
  {
    id: 2,
    name: "Mr. Smith",
    relation: "Parent of Bob",
    lastMessage: "Can we schedule a meeting?",
    time: "5h ago",
    unread: 2,
  },
  {
    id: 3,
    name: "Ms. Davis",
    relation: "Parent of Charlie",
    lastMessage: "Looking forward to the parent-teacher conference",
    time: "1d ago",
    unread: 0,
  },
];

export default function Messages() {
  const [selectedConv, setSelectedConv] = useState(conversations[0]);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-foreground">Parent Communication</h2>
          <p className="text-muted-foreground mt-1">
            Send messages and updates to parents
          </p>
        </div>

        {/* Messages Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="lg:col-span-1 p-4 border-border shadow-md h-[600px] flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConv(conv)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedConv.id === conv.id
                      ? "bg-primary/10 border-2 border-primary"
                      : "border border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {conv.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{conv.name}</p>
                        <p className="text-xs text-muted-foreground">{conv.relation}</p>
                      </div>
                    </div>
                    {conv.unread > 0 && (
                      <Badge variant="default" className="rounded-full px-2 py-0.5 text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-2">
                    {conv.lastMessage}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 p-6 border-border shadow-md h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b border-border pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-secondary-foreground font-bold">
                  {selectedConv.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{selectedConv.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedConv.relation}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-md">
                  <p className="text-sm">Hello! I wanted to update you about Alice's progress.</p>
                  <p className="text-xs opacity-70 mt-1">3h ago</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 max-w-md">
                  <p className="text-sm text-foreground">Thank you for the update!</p>
                  <p className="text-xs text-muted-foreground mt-1">2h ago</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button variant="hero">
                <Send size={18} />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}