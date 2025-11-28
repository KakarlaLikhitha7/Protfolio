import { Brain, Code, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const interests = [
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: Code, label: "Machine Learning" },
    { icon: Lightbulb, label: "Web Design" },
    { icon: Users, label: "Innovation" },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-border p-8 mb-8 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented developer with hands-on experience in real-world projects across Web Development and AI&ML. 
              Seeking an opportunity to contribute to innovative, scalable applications while applying strong problem-solving abilities 
              and a continuous learning mindset to deliver impactful solutions in a dynamic organization.
            </p>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <Card
                key={interest.label}
                className="bg-background border-border p-6 text-center hover:border-primary transition-all duration-300 hover:glow-teal cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <interest.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium text-foreground">{interest.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
