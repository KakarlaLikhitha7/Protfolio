import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const Skills = () => {
  const skillCategories = [{
    category: "Programming Languages",
    skills: [{
      name: "C",
      level: 85
    }, {
      name: "Java",
      level: 80
    }]
  }, {
    category: "Web Development",
    skills: [{
      name: "HTML & CSS",
      level: 90
    }, {
      name: "JavaScript",
      level: 85
    }, {
      name: "JSP",
      level: 75
    }, {
      name: "PHP",
      level: 80
    }]
  }, {
    category: "Databases",
    skills: [{
      name: "MySQL",
      level: 85
    }, {
      name: "SQL",
      level: 85
    }, {
      name: "PostgreSQL",
      level: 80
    }]
  }, {
    category: "Cloud & Tools",
    skills: [{
      name: "AWS Cloud",
      level: 70
    }, {
      name: "GitHub",
      level: 85
    }, {
      name: "Visual Studio",
      level: 80
    }, {
      name: "XAMPP",
      level: 75
    }]
  }];
  return <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => <Card key={category.category} style={{
          animationDelay: `${idx * 0.1}s`
        }} className="border-border p-6 hover:border-primary transition-all duration-300 animate-fade-in-up bg-slate-900">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map(skill => <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>)}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Skills;