import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { School } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Logged in as ${userType}`);
    navigate(userType === "student" ? "/student-dashboard" : "/teacher-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-secondary-light p-4">
      <Card className="w-full max-w-md p-6 space-y-6 animate-fadeIn">
        <div className="text-center space-y-2">
          <School className="w-12 h-12 mx-auto text-primary" />
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <RadioGroup
            defaultValue="student"
            className="flex gap-4"
            onValueChange={setUserType}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="teacher" id="teacher" />
              <Label htmlFor="teacher">Teacher</Label>
            </div>
          </RadioGroup>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Login;