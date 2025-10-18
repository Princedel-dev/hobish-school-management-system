import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Upload, Star } from "lucide-react";

const results = [
  {
    id: 1,
    student: "Alice Johnson",
    rollNo: "2024001",
    subject: "Mathematics",
    marks: 95,
    grade: "A+",
    percentage: 95,
  },
  {
    id: 2,
    student: "Alice Johnson",
    rollNo: "2024001",
    subject: "English",
    marks: 88,
    grade: "A",
    percentage: 88,
  },
  {
    id: 3,
    student: "Bob Smith",
    rollNo: "2024002",
    subject: "Mathematics",
    marks: 78,
    grade: "B+",
    percentage: 78,
  },
  {
    id: 4,
    student: "Bob Smith",
    rollNo: "2024002",
    subject: "English",
    marks: 82,
    grade: "A-",
    percentage: 82,
  },
];

const getGradeColor = (grade: string) => {
  if (grade.startsWith("A")) return "success";
  if (grade.startsWith("B")) return "primary";
  if (grade.startsWith("C")) return "warning";
  return "destructive";
};

export default function Results() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Exam Results</h2>
            <p className="text-muted-foreground mt-1">
              Upload and view student exam results
            </p>
          </div>
          <Button variant="hero">
            <Upload className="mr-2" size={18} />
            Upload Results
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Star className="text-success" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Top Score</p>
                <p className="text-xl font-bold text-foreground">95%</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average</p>
                <p className="text-xl font-bold text-foreground">85%</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
                <p className="text-xl font-bold text-foreground">92%</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Star className="text-secondary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">A Grades</p>
                <p className="text-xl font-bold text-foreground">24</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Results Table */}
        <Card className="p-6 border-border shadow-md">
          <h3 className="text-xl font-bold mb-4">Recent Results</h3>
          <div className="space-y-3">
            {results.map((result) => (
              <div
                key={result.id}
                className="p-4 rounded-lg border border-border hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    {result.student.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{result.student}</p>
                    <p className="text-sm text-muted-foreground">{result.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{result.marks}</p>
                    <p className="text-xs text-muted-foreground">out of 100</p>
                  </div>
                  <Badge
                    variant={getGradeColor(result.grade) as any}
                    className="text-lg px-4 py-1"
                  >
                    {result.grade}
                  </Badge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}