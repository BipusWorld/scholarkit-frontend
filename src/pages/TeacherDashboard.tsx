import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  BookOpen,
  Clock,
  FileText,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActionCard = ({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: any;
  color: string;
}) => (
  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </Card>
);

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Classes</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Class X-A Mathematics</h3>
                  <p className="text-sm text-gray-500">9:00 AM - 10:00 AM</p>
                </div>
                <Button size="sm">Take Attendance</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Class IX-B Mathematics</h3>
                  <p className="text-sm text-gray-500">11:00 AM - 12:00 PM</p>
                </div>
                <Button size="sm">Take Attendance</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Mid-Term Examinations</h3>
                  <p className="text-sm text-gray-500">Starts from March 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Parent-Teacher Meeting</h3>
                  <p className="text-sm text-gray-500">March 20</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickActionCard
            title="Update Attendance"
            description="Mark today's attendance"
            icon={Users}
            color="bg-primary"
          />
          <QuickActionCard
            title="Class Schedule"
            description="View your timetable"
            icon={Clock}
            color="bg-accent"
          />
          <QuickActionCard
            title="Update Marks"
            description="Enter student marks"
            icon={FileText}
            color="bg-green-500"
          />
          <QuickActionCard
            title="Syllabus Progress"
            description="Track curriculum progress"
            icon={BookOpen}
            color="bg-blue-500"
          />
          <QuickActionCard
            title="Leave Applications"
            description="Review student leaves"
            icon={Calendar}
            color="bg-purple-500"
          />
          <QuickActionCard
            title="Salary Details"
            description="View payment information"
            icon={CreditCard}
            color="bg-pink-500"
          />
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;