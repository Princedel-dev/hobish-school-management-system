import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  CreditCard, 
  FileText, 
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Users,
    title: "Attendance Monitoring",
    description: "Track student attendance with ease. View detailed reports and send automated alerts to parents.",
  },
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Create and manage courses, subjects, and schedules effortlessly with our intuitive interface.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Track payments, send friendly reminders, and manage student fees with a colorful, reassuring UI.",
  },
  {
    icon: FileText,
    title: "Exam Results",
    description: "Upload grades and let students see their progress with engaging badges and visual feedback.",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description: "Built-in messaging system for seamless communication between staff and parents.",
  },
  {
    icon: GraduationCap,
    title: "Staff Management",
    description: "Manage teacher information, assign classes, and organize work schedules efficiently.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center text-primary-foreground space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <GraduationCap size={80} className="animate-bounce-in" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Welcome to HOBISH
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              A modern, user-friendly School Management System designed with empathy 
              toward students, teachers, and parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to manage every aspect of your school efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Why Choose HOBISH?
              </h2>
              <p className="text-lg text-muted-foreground">
                Built with modern technology and designed with care for all users - 
                from administrators to parents.
              </p>
              <div className="space-y-4">
                {[
                  "User-friendly interface for all skill levels",
                  "Real-time updates and notifications",
                  "Secure data management and privacy",
                  "Mobile-responsive design",
                  "Comprehensive reporting and analytics",
                  "Dedicated support team",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-success-foreground" size={16} />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <Card className="p-8 border-border shadow-2xl bg-gradient-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Students</span>
                    <span className="text-3xl font-bold text-foreground">1,248</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Active Courses</span>
                    <span className="text-3xl font-bold text-foreground">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Attendance Rate</span>
                    <span className="text-3xl font-bold text-success">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Parent Satisfaction</span>
                    <span className="text-3xl font-bold text-primary">98%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl opacity-95">
            Join hundreds of schools already using HOBISH to streamline their operations 
            and improve communication.
          </p>
          <Link to="/">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GraduationCap size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">HOBISH</span>
          </div>
          <p className="text-muted-foreground">
            Modern School Management System © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}