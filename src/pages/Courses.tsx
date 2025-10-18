import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Plus } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Mathematics",
    grade: "Grade 10",
    teacher: "Dr. Sarah Wilson",
    students: 32,
    schedule: "Mon, Wed, Fri - 9:00 AM",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "English Literature",
    grade: "Grade 10",
    teacher: "Prof. James Anderson",
    students: 28,
    schedule: "Tue, Thu - 10:30 AM",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "Physics",
    grade: "Grade 11",
    teacher: "Dr. Emily Chen",
    students: 25,
    schedule: "Mon, Wed - 2:00 PM",
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    name: "Chemistry",
    grade: "Grade 11",
    teacher: "Dr. Michael Brown",
    students: 30,
    schedule: "Tue, Thu, Fri - 11:00 AM",
    color: "from-orange-500 to-orange-600",
  },
];

export default function Courses() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Course Management</h2>
            <p className="text-muted-foreground mt-1">
              Manage courses, subjects, and schedules
            </p>
          </div>
          <Button variant="hero">
            <Plus className="mr-2" size={18} />
            Add New Course
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden border-border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`h-32 bg-gradient-to-br ${course.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <BookOpen size={32} />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {course.grade}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mt-4">{course.name}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Teacher:</span>
                    <span className="font-medium text-foreground">{course.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium text-foreground">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{course.schedule}</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Edit
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}