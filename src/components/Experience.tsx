import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "ML Intern",
      company: "Taras",
      period: "May – Jun 2025",
      description: "Applied ML algorithms to enhance model performance and solve challenges.",
      current: false,
    },
    {
      role: "Web Development Intern",
      company: "Edubot Station Private Limited",
      period: "Dec 2024 – Mar 2025",
      description: "Development of various screens and UI components for the LMS platform.",
      current: false,
    },
    {
      role: "AI & ML Virtual Intern",
      company: "EduSkills",
      period: "Apr – Jun 2024",
      description: "Developed predictive models using classification & clustering algorithms.",
      current: false,
    },
    {
      role: "Python Full Stack Intern",
      company: "LINEYSHA and THEVAN Software Technologies",
      period: "May – Jun 2024",
      description: "Developed QR code food delivery app for seamless orders.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block transform -translate-x-1/2" />

                  <Card className="bg-background border-border p-6 md:ml-20 hover:border-primary transition-all duration-300 hover:glow-teal">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <Badge className="bg-primary text-primary-foreground">Current</Badge>
                        )}
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
