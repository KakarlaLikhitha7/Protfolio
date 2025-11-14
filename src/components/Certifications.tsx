import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const globalCertifications = [
    "AWS Cloud Practitioner"
  ];

  const certifications = [
    "HTML5, Programming using Java, Javascript – Infosys SpringBoard",
    "PCAP - Programming Essentials in Python, Cybersecurity Essentials, Introduction to Packet Tracer - Cisco",
    "SQL(Basic), Java (Basic) – HackerRank",
    "Introduction to IoT - NPTEL"
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Professional certifications and accomplishments</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Global Certifications */}
          <Card className="animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                Global Certification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {globalCertifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Badge variant="default" className="mt-1">
                      {cert}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Certifications */}
          <Card className="animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

