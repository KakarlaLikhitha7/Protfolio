import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Creamy Delight Hub",
      description: "Frontend website with user-friendly product display showcasing ice cream products.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "from-primary to-primary/70",
      projectUrl: "https://creamy-delight-hub.vercel.app/",
      githubUrl: "https://github.com/KakarlaLikhitha7/Creamy-Delight-Hub.git",
    },
    {
      title: "LuxLiving",
      description: "Online e-commerce platform with dynamic pricing for seamless shopping experience.",
      tech: ["HTML", "CSS", "PHP", "PostgreSQL"],
      color: "from-secondary to-secondary/70",
      projectUrl: "#", // Replace with your project URL
      githubUrl: "#", // Replace with your GitHub repository URL
    },
    {
      title: "Cyber Hacking Breaches",
      description: "Cybersecurity project on detecting and analyzing hacking breaches using Python.",
      tech: ["Python"],
      color: "from-destructive to-destructive/70",
      projectUrl: "#", // Replace with your project URL
      githubUrl: "#", // Replace with your GitHub repository URL
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in-up hover:glow-teal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 min-h-[80px]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
