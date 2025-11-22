import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      icon: Users,
      change: "+12%",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Total Classes",
      value: "48",
      icon: GraduationCap,
      change: "+5%",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Departments",
      value: "12",
      icon: Building2,
      change: "+2%",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Active Courses",
      value: "156",
      icon: TrendingUp,
      change: "+8%",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your school management system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.title} 
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your school system efficiently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Manage Classes</CardTitle>
                  <CardDescription>
                    Add, edit, or remove classes
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-lg">Manage Students</CardTitle>
                  <CardDescription>
                    View and update student records
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
                <CardHeader>
                  <Building2 className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">Manage Departments</CardTitle>
                  <CardDescription>
                    Organize school departments
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
