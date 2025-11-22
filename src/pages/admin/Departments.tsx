import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Department {
  id: string;
  name: string;
  head: string;
  description: string;
  students: number;
}

const Departments = () => {
  const { toast } = useToast();
  const [departments, setDepartments] = useState<Department[]>([
    { id: "1", name: "Biomedical Sciences", head: "Dr. Sarah Brown", description: "Advanced studies in biological and medical sciences", students: 450 },
    { id: "2", name: "Business Administration", head: "Prof. Michael Chen", description: "Comprehensive business education and management", students: 620 },
    { id: "3", name: "Information Technology", head: "Dr. James Wilson", description: "Modern computing and technology programs", students: 385 },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [formData, setFormData] = useState({ name: "", head: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDept) {
      setDepartments(departments.map(d => d.id === editingDept.id 
        ? { ...d, ...formData }
        : d
      ));
      toast({ title: "Department updated successfully" });
    } else {
      const newDept: Department = {
        id: Date.now().toString(),
        name: formData.name,
        head: formData.head,
        description: formData.description,
        students: 0,
      };
      setDepartments([...departments, newDept]);
      toast({ title: "Department added successfully" });
    }
    setDialogOpen(false);
    setFormData({ name: "", head: "", description: "" });
    setEditingDept(null);
  };

  const handleEdit = (dept: Department) => {
    setEditingDept(dept);
    setFormData({ name: dept.name, head: dept.head, description: dept.description });
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setDepartments(departments.filter(d => d.id !== id));
    toast({ title: "Department deleted successfully", variant: "destructive" });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Building2 className="h-10 w-10 text-secondary" />
              Departments Management
            </h1>
            <p className="text-muted-foreground">
              Add, edit, or remove departments in your school system
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                Add New Department
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingDept ? "Edit Department" : "Add New Department"}</DialogTitle>
                <DialogDescription>
                  {editingDept ? "Update the department information" : "Enter the details of the new department"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Department Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Biomedical Sciences"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="head">Department Head</Label>
                  <Input
                    id="head"
                    placeholder="e.g., Dr. Sarah Brown"
                    value={formData.head}
                    onChange={(e) => setFormData({ ...formData, head: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the department"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  {editingDept ? "Update Department" : "Add Department"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>All Departments</CardTitle>
            <CardDescription>
              View and manage all departments in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department</TableHead>
                  <TableHead>Department Head</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.map((dept) => (
                  <TableRow key={dept.id}>
                    <TableCell className="font-medium">{dept.name}</TableCell>
                    <TableCell>{dept.head}</TableCell>
                    <TableCell className="max-w-xs truncate">{dept.description}</TableCell>
                    <TableCell>{dept.students}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(dept)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(dept.id)}
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

export default Departments;
