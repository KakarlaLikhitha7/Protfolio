import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Cloud, Code, Database, Shield } from "lucide-react";

const Certifications = () => {
  const globalCertification = {
    name: "AWS Cloud Practitioner",
    icon: Cloud,
    type: "Global"
  };

  const certificationGroups = [
    {
      provider: "Infosys SpringBoard",
      icon: Code,
      certs: ["HTML5", "Programming using Java", "Javascript"]
    },
    {
      provider: "Cisco",
      icon: Shield,
      certs: [
        "PCAP - Programming Essentials in Python",
        "Cybersecurity Essentials",
        "Introduction to Packet Tracer"
      ]
    },
    {
      provider: "HackerRank",
      icon: Database,
      certs: ["SQL (Basic)", "Java (Basic)"]
    },
    {
      provider: "NPTEL",
      icon: Code,
      certs: ["Introduction to IoT"]
    }
  ];

  const achievements = [
    "Participated in a Hackathon Conducted by Brainovision",
    "Participated in coding events and workshops (IoT)",
    "Served as Coordinator for Medha-2024 Lakshya Event at LBRCE"
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Professional certifications and accomplishments</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Global Certification - Featured */}
          <Card className="animate-fade-in hover-scale border-primary/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <span>Global Certification</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-primary/20">
                <globalCertification.icon className="text-primary w-5 h-5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{globalCertification.name}</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
                <Badge variant="default" className="bg-primary">Certified</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Platform-specific Certifications */}
          <Card className="animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Award className="text-secondary w-6 h-6" />
                </div>
                <span>Platform Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {certificationGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {groupIndex > 0 && <Separator className="mb-6" />}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <group.icon className="text-secondary w-5 h-5" />
                      <h3 className="font-semibold text-foreground">{group.provider}</h3>
                    </div>
                    <div className="pl-7 space-y-2">
                      {group.certs.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-start gap-2">
                          <span className="text-secondary mt-1 text-xs">▪</span>
                          <span className="text-sm text-muted-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Academic Achievements */}
          <Card className="animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="text-accent w-6 h-6" />
                </div>
                <span>Academic Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

