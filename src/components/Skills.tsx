import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [{
    category: "Programming Languages",
    skills: ["C", "Java"]
  }, {
    category: "Web Development",
    skills: ["HTML & CSS", "JavaScript", "JSP", "PHP"]
  }, {
    category: "Databases",
    skills: ["MySQL", "SQL", "PostgreSQL"]
  }, {
    category: "Cloud & Tools",
    skills: ["AWS Cloud", "GitHub", "Visual Studio", "XAMPP"]
  }];
  return <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.category} 
              style={{ animationDelay: `${idx * 0.1}s` }} 
              className="border-border p-6 hover:border-primary transition-all duration-300 animate-fade-in-up bg-card"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default Skills;