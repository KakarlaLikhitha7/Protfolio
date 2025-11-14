import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, TrendingUp, Briefcase } from "lucide-react";

const SoftSkills = () => {
  const skills = [
    { name: "Communication", icon: MessageCircle },
    { name: "Teamwork", icon: Users },
    { name: "Leadership", icon: TrendingUp },
    { name: "Organizational Skills", icon: Briefcase }
  ];

  return (
    <section id="soft-skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Soft Skills</h2>
          <p className="text-muted-foreground">Personal and interpersonal competencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="animate-fade-in hover-scale text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
