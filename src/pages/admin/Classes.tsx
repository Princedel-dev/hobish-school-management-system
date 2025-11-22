import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Class {
  id: string;
  name: string;
  level: string;
  students: number;
  teacher: string;
}

const Classes = () => {
  const { toast } = useToast();
  const [classes, setClasses] = useState<Class[]>([
    { id: "1", name: "Biology 101", level: "Undergraduate", students: 45, teacher: "Dr. Smith" },
    { id: "2", name: "Business Management", level: "Graduate", students: 32, teacher: "Prof. Johnson" },
    { id: "3", name: "Chemistry Lab", level: "Undergraduate", students: 28, teacher: "Dr. Williams" },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<Class | null>(null);
  const [formData, setFormData] = useState({ name: "", level: "", teacher: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingClass) {
      setClasses(classes.map(c => c.id === editingClass.id 
        ? { ...c, ...formData }
        : c
      ));
      toast({ title: "Class updated successfully" });
    } else {
      const newClass: Class = {
        id: Date.now().toString(),
        name: formData.name,
        level: formData.level,
        students: 0,
        teacher: formData.teacher,
      };
      setClasses([...classes, newClass]);
      toast({ title: "Class added successfully" });
    }
    setDialogOpen(false);
    setFormData({ name: "", level: "", teacher: "" });
    setEditingClass(null);
  };

  const handleEdit = (classItem: Class) => {
    setEditingClass(classItem);
    setFormData({ name: classItem.name, level: classItem.level, teacher: classItem.teacher });
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setClasses(classes.filter(c => c.id !== id));
    toast({ title: "Class deleted successfully", variant: "destructive" });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-primary" />
              Classes Management
            </h1>
            <p className="text-muted-foreground">
              Add, edit, or remove classes in your school system
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                Add New Class
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingClass ? "Edit Class" : "Add New Class"}</DialogTitle>
                <DialogDescription>
                  {editingClass ? "Update the class information" : "Enter the details of the new class"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Class Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Biology 101"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Input
                    id="level"
                    placeholder="e.g., Undergraduate"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher">Teacher</Label>
                  <Input
                    id="teacher"
                    placeholder="e.g., Dr. Smith"
                    value={formData.teacher}
                    onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  {editingClass ? "Update Class" : "Add Class"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>All Classes</CardTitle>
            <CardDescription>
              View and manage all classes in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell className="font-medium">{classItem.name}</TableCell>
                    <TableCell>{classItem.level}</TableCell>
                    <TableCell>{classItem.students}</TableCell>
                    <TableCell>{classItem.teacher}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(classItem)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(classItem.id)}
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

export default Classes;
