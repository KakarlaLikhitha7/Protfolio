import { GraduationCap, Brain, Code, Lightbulb, Users } from "lucide-react";
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a B.Tech CSE (AI & ML) student passionate about technology, innovation, and continuous learning. 
              I enjoy exploring how artificial intelligence and machine learning can solve real-world problems and 
              make life easier. I'm driven by curiosity, creativity, and a desire to build intelligent systems that 
              have a positive impact on society.
            </p>

            <div className="flex items-start gap-4 bg-muted p-6 rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Education</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">B.Tech in Computer Science Engineering (AI & ML)</span>
                  <br />
                  Lakireddy Bali Reddy College of Engineering
                  <br />
                  <span className="text-primary">Graduating in 2026</span>
                </p>
              </div>
            </div>
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
