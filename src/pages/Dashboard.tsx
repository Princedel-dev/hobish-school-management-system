import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Users, BookOpen, TrendingUp, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's what's happening with your school today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="1,248"
            icon={Users}
            trend="+12% from last month"
            trendUp={true}
          />
          <StatCard
            title="Active Courses"
            value="42"
            icon={BookOpen}
            trend="3 new this semester"
            trendUp={true}
          />
          <StatCard
            title="Attendance Rate"
            value="94%"
            icon={TrendingUp}
            trend="+2% this week"
            trendUp={true}
          />
          <StatCard
            title="Upcoming Exams"
            value="8"
            icon={Calendar}
            trend="Next: Mathematics"
            trendUp={false}
          />
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card className="p-6 shadow-md border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2" size={18} />
                Mark Today's Attendance
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="mr-2" size={18} />
                Create New Course
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2" size={18} />
                Schedule Exam
              </Button>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 shadow-md border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2" />
                <div>
                  <p className="text-sm font-medium">Grade 10-A attendance marked</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="text-sm font-medium">New message from parent</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                <div>
                  <p className="text-sm font-medium">Fee payment reminder sent</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}