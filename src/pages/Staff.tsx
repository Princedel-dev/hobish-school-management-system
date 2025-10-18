import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Mail, Phone, BookOpen } from "lucide-react";

const staff = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    role: "Mathematics Teacher",
    email: "sarah.wilson@hobish.edu",
    phone: "+1 234-567-8901",
    subjects: ["Mathematics", "Statistics"],
    classes: ["Grade 10-A", "Grade 11-B"],
  },
  {
    id: 2,
    name: "Prof. James Anderson",
    role: "English Teacher",
    email: "james.anderson@hobish.edu",
    phone: "+1 234-567-8902",
    subjects: ["English Literature", "Creative Writing"],
    classes: ["Grade 10-A", "Grade 9-C"],
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Physics Teacher",
    email: "emily.chen@hobish.edu",
    phone: "+1 234-567-8903",
    subjects: ["Physics", "Applied Science"],
    classes: ["Grade 11-A", "Grade 12-B"],
  },
];

export default function Staff() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Teacher & Staff Management</h2>
            <p className="text-muted-foreground mt-1">
              Manage staff information and assignments
            </p>
          </div>
          <Button variant="hero">
            <UserPlus className="mr-2" size={18} />
            Add Staff Member
          </Button>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {staff.map((member) => (
            <Card
              key={member.id}
              className="p-6 border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {member.role}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{member.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <BookOpen size={16} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-muted-foreground mb-1">Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <BookOpen size={16} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-muted-foreground mb-1">Classes:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.classes.map((cls, idx) => (
                        <Badge key={idx} variant="default" className="text-xs">
                          {cls}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Schedule
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  Edit Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}