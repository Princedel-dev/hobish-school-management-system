import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Attendance = lazy(() => import("./pages/Attendance"));
const Courses = lazy(() => import("./pages/Courses"));
const Fees = lazy(() => import("./pages/Fees"));
const Results = lazy(() => import("./pages/Results"));
const Messages = lazy(() => import("./pages/Messages"));
const Staff = lazy(() => import("./pages/Staff"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminClasses = lazy(() => import("./pages/admin/Classes"));
const AdminStudents = lazy(() => import("./pages/admin/Students"));
const AdminDepartments = lazy(() => import("./pages/admin/Departments"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/welcome" element={<Index />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/results" element={<Results />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/staff" element={<Staff />} />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/classes" element={<AdminClasses />} />
            <Route path="/admin/students" element={<AdminStudents />} />
            <Route path="/admin/departments" element={<AdminDepartments />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
