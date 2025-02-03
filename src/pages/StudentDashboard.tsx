import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  BookOpen,
  Clock,
  FileText,
  CreditCard,
  UserCheck,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickStatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  icon: any;
  color: string;
}) => (
  <Card className="p-4 flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </Card>
);

const ModuleCard = ({
  title,
  icon: Icon,
  color,
  onClick,
}: {
  title: string;
  icon: any;
  color: string;
  onClick?: () => void;
}) => (
  <Card 
    className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
    onClick={onClick}
  >
    <div className={`p-3 rounded-full ${color} w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-medium">{title}</h3>
  </Card>
);

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => navigate("/")}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickStatCard
            title="Attendance"
            value="85%"
            icon={UserCheck}
            color="bg-primary"
          />
          <QuickStatCard
            title="Pending Fees"
            value="₹5,000"
            icon={CreditCard}
            color="bg-accent"
          />
          <QuickStatCard
            title="Next Exam"
            value="Mar 15"
            icon={Calendar}
            color="bg-green-500"
          />
        </div>

        <h2 className="text-xl font-semibold mb-6">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ModuleCard 
            title="Time Table" 
            icon={Clock} 
            color="bg-primary"
            onClick={() => navigate("/student/timetable")}
          />
          <ModuleCard 
            title="Syllabus" 
            icon={BookOpen} 
            color="bg-accent" 
            onClick={() => navigate("/student/syllabus")}
          />
          <ModuleCard
            title="Leave Application"
            icon={FileText}
            color="bg-green-500"
            onClick={() => navigate("/student/leave-application")}
          />
          <ModuleCard 
            title="Previous Papers" 
            icon={FileText} 
            color="bg-blue-500"
            onClick={() => navigate("/student/past-papers")}
          />
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-6">Recent Announcements</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium">Mid-Term Examination Schedule</h3>
              <p className="text-sm text-gray-500 mt-1">
                The mid-term examinations will begin from March 15th. Please check
                the detailed schedule.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">Annual Sports Day</h3>
              <p className="text-sm text-gray-500 mt-1">
                Annual Sports Day will be held on March 20th. All students are
                requested to register for events.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;