import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Calendar } from "lucide-react";
import { useState } from "react";

const students = [
  { id: 1, name: "Alice Johnson", rollNo: "2024001", status: "present" },
  { id: 2, name: "Bob Smith", rollNo: "2024002", status: "present" },
  { id: 3, name: "Charlie Brown", rollNo: "2024003", status: "absent" },
  { id: 4, name: "Diana Prince", rollNo: "2024004", status: "present" },
  { id: 5, name: "Ethan Hunt", rollNo: "2024005", status: "present" },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState(
    students.map(s => ({ id: s.id, status: s.status }))
  );

  const toggleAttendance = (id: number) => {
    setAttendance(prev =>
      prev.map(a =>
        a.id === id
          ? { ...a, status: a.status === "present" ? "absent" : "present" }
          : a
      )
    );
  };

  const presentCount = attendance.filter(a => a.status === "present").length;
  const attendanceRate = Math.round((presentCount / attendance.length) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Attendance Monitoring</h2>
            <p className="text-muted-foreground mt-1">
              Mark and track student attendance
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="mr-2" size={18} />
              View History
            </Button>
            <Button variant="success">Save Attendance</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 border-border">
            <p className="text-sm text-muted-foreground">Present Today</p>
            <p className="text-2xl font-bold text-success">{presentCount}</p>
          </Card>
          <Card className="p-4 border-border">
            <p className="text-sm text-muted-foreground">Absent Today</p>
            <p className="text-2xl font-bold text-destructive">
              {attendance.length - presentCount}
            </p>
          </Card>
          <Card className="p-4 border-border">
            <p className="text-sm text-muted-foreground">Attendance Rate</p>
            <p className="text-2xl font-bold text-primary">{attendanceRate}%</p>
          </Card>
        </div>

        {/* Attendance List */}
        <Card className="p-6 border-border shadow-md">
          <h3 className="text-xl font-bold mb-4">Class 10-A Students</h3>
          <div className="space-y-3">
            {students.map((student) => {
              const status = attendance.find(a => a.id === student.id)?.status;
              return (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Roll: {student.rollNo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={status === "present" ? "default" : "destructive"}
                      className="px-3 py-1"
                    >
                      {status === "present" ? "Present" : "Absent"}
                    </Badge>
                    <Button
                      size="icon"
                      variant={status === "present" ? "success" : "outline"}
                      onClick={() => toggleAttendance(student.id)}
                    >
                      {status === "present" ? <Check size={18} /> : <X size={18} />}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}