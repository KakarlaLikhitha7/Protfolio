import { GraduationCap, BookOpen, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      icon: GraduationCap,
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "Lakireddy Bali Reddy College of Engineering",
      period: "2023 - 2026",
      score: "CGPA: 8.73",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      degree: "Diploma in Computer Engineering",
      institution: "K. E. S Polytechnic for Women",
      period: "2020 - 2023",
      score: "Percentage: 90.06%",
      color: "text-secondary"
    },
    {
      icon: School,
      degree: "Secondary Education (SSC)",
      institution: "Siddhartha English Medium High School",
      period: "2019 - 2020",
      score: "GPA: 8.7",
      color: "text-accent"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-teal animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${edu.color}`}>
                    <edu.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                <p className={`font-semibold ${edu.color}`}>{edu.score}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;