import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const feeRecords = [
  {
    id: 1,
    student: "Alice Johnson",
    rollNo: "2024001",
    totalFee: 5000,
    paid: 5000,
    status: "paid",
    dueDate: "Jan 15, 2024",
  },
  {
    id: 2,
    student: "Bob Smith",
    rollNo: "2024002",
    totalFee: 5000,
    paid: 2500,
    status: "partial",
    dueDate: "Jan 15, 2024",
  },
  {
    id: 3,
    student: "Charlie Brown",
    rollNo: "2024003",
    totalFee: 5000,
    paid: 0,
    status: "pending",
    dueDate: "Jan 15, 2024",
  },
];

export default function Fees() {
  const totalCollected = feeRecords.reduce((sum, record) => sum + record.paid, 0);
  const totalExpected = feeRecords.reduce((sum, record) => sum + record.totalFee, 0);
  const collectionRate = Math.round((totalCollected / totalExpected) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Fee Management</h2>
            <p className="text-muted-foreground mt-1">
              Track student fees and payment history
            </p>
          </div>
          <Button variant="secondary">
            <DollarSign className="mr-2" size={18} />
            Record Payment
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-border shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Collected</p>
                <p className="text-3xl font-bold text-success">${totalCollected}</p>
              </div>
              <div className="p-3 rounded-lg bg-success/10">
                <CheckCircle className="text-success" size={24} />
              </div>
            </div>
          </Card>
          <Card className="p-6 border-border shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending Amount</p>
                <p className="text-3xl font-bold text-warning">
                  ${totalExpected - totalCollected}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-warning/10">
                <Clock className="text-warning" size={24} />
              </div>
            </div>
          </Card>
          <Card className="p-6 border-border shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Collection Rate</p>
                <p className="text-3xl font-bold text-primary">{collectionRate}%</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <DollarSign className="text-primary" size={24} />
              </div>
            </div>
          </Card>
        </div>

        {/* Fee Records */}
        <Card className="p-6 border-border shadow-md">
          <h3 className="text-xl font-bold mb-4">Payment Records</h3>
          <div className="space-y-4">
            {feeRecords.map((record) => {
              const progress = (record.paid / record.totalFee) * 100;
              return (
                <div
                  key={record.id}
                  className="p-5 rounded-lg border border-border hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{record.student}</p>
                      <p className="text-sm text-muted-foreground">Roll: {record.rollNo}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          record.status === "paid"
                            ? "default"
                            : record.status === "partial"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {record.status === "paid"
                          ? "Paid"
                          : record.status === "partial"
                          ? "Partial"
                          : "Pending"}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${record.paid} / ${record.totalFee}
                      </span>
                      <span className="font-medium text-foreground">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  {record.status !== "paid" && (
                    <div className="flex items-center gap-2 mt-3 text-sm text-warning">
                      <AlertCircle size={14} />
                      <span>Due: {record.dueDate}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}