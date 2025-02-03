import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
];

const classes = ["XI", "XII"];

const syllabusContent = {
  "Mathematics-XI": [
    "Sets and Functions",
    "Algebra",
    "Coordinate Geometry",
    "Calculus",
    "Mathematical Reasoning",
    "Statistics and Probability",
  ],
  "Physics-XI": [
    "Physical World and Measurement",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy and Power",
    "Motion of System of Particles and Rigid Body",
    "Gravitation",
  ],
  // Add more subject-class combinations as needed
};

const StudentSyllabus = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const navigate = useNavigate();

  const getSyllabusContent = () => {
    const key = `${selectedSubject}-${selectedClass}`;
    return syllabusContent[key as keyof typeof syllabusContent] || [];
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/student-dashboard")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <h1 className="text-3xl font-bold mb-6">Syllabus</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Select Class</label>
            <Select onValueChange={setSelectedClass} value={selectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((className) => (
                  <SelectItem key={className} value={className}>
                    Class {className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Select Subject</label>
            <Select onValueChange={setSelectedSubject} value={selectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedSubject && selectedClass && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedSubject} Syllabus for Class {selectedClass}
            </h2>
            <ScrollArea className="h-[400px]">
              <ul className="space-y-4">
                {getSyllabusContent().map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">
                      {index + 1}
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentSyllabus;