import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  department: string;
}

const Students = () => {
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "John Doe", email: "john@hobish.edu.cm", class: "Biology 101", department: "Sciences" },
    { id: "2", name: "Jane Smith", email: "jane@hobish.edu.cm", class: "Business Management", department: "Business" },
    { id: "3", name: "Mike Johnson", email: "mike@hobish.edu.cm", class: "Chemistry Lab", department: "Sciences" },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", class: "", department: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents(students.map(s => s.id === editingStudent.id 
        ? { ...s, ...formData }
        : s
      ));
      toast({ title: "Student updated successfully" });
    } else {
      const newStudent: Student = {
        id: Date.now().toString(),
        ...formData,
      };
      setStudents([...students, newStudent]);
      toast({ title: "Student added successfully" });
    }
    setDialogOpen(false);
    setFormData({ name: "", email: "", class: "", department: "" });
    setEditingStudent(null);
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setFormData({ name: student.name, email: student.email, class: student.class, department: student.department });
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
    toast({ title: "Student deleted successfully", variant: "destructive" });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Users className="h-10 w-10 text-accent" />
              Students Management
            </h1>
            <p className="text-muted-foreground">
              Add, edit, or remove students in your school system
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                Add New Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingStudent ? "Edit Student" : "Add New Student"}</DialogTitle>
                <DialogDescription>
                  {editingStudent ? "Update the student information" : "Enter the details of the new student"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g., john@hobish.edu.cm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Input
                    id="class"
                    placeholder="e.g., Biology 101"
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    placeholder="e.g., Sciences"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  {editingStudent ? "Update Student" : "Add Student"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>
              View and manage all students in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(student)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(student.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Students;
