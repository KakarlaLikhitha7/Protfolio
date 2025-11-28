import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, MapPin, Award, Briefcase, Code, Globe, Database, Cloud, Wrench } from "lucide-react";

const Resume = () => {
  const education = [
    { degree: "B.TECH", details: "Pursuing final year in CSE (AI & ML) at Lakireddy Bali Reddy College of Engineering", score: "CGPA: 8.73 (2023-2026)" },
    { degree: "DIPLOMA", details: "Completed at K.E.S Polytechnic for Women - CME", score: "Percentage: 90.06% (2020-2023)" },
    { degree: "SSC", details: "Completed at Siddhartha English Medium High School", score: "GPA: 8.7 (2019-2020)" }
  ];

  const technicalSkills = {
    "Programming Languages": ["C", "Java"],
    "Web Development": ["HTML", "CSS", "JavaScript"],
    "Databases": ["MySQL", "SQL", "PL/SQL"],
    "Cloud": ["AWS Cloud"],
    "Tools & IDEs": ["GitHub", "Visual Studio", "XAMPP"]
  };

  const softSkills = ["Communication", "Teamwork", "Leadership", "Organizational Skills"];

  const projects = [
    { name: "Creamy Delight Hub", tech: "Front End-HTML, CSS, JS", desc: "Frontend website user-friendly product display." },
    { name: "LuxLiving", tech: "PHP, PostgreSQL", desc: "Online Platform e-commerce platform with dynamic pricing." },
    { name: "Cyber Hacking Breaches", tech: "Python", desc: "Cybersecurity project on detecting and analyzing hacking breaches." }
  ];

  const internships = [
    { role: "Python Full Stack Intern", company: "LINEYSHA and THEVAN Software Technologies", period: "May - June 2024", desc: "Developed QR code food delivery app for seamless orders." },
    { role: "AI & ML Virtual Intern", company: "EduSkills", period: "Apr - June 2024", desc: "Developed predictive models using classification & clustering algorithms." },
    { role: "Web Development", company: "Edubot Station Private Limited", period: "Dec 2024 - Mar 2025", desc: "Development of various screens and UI components for the LMS platform." },
    { role: "ML Intern", company: "Taras", period: "May - June 2025", desc: "Applied ML algorithms to enhance model performance and solve challenges." }
  ];

  const certifications = [
    { type: "Global", name: "AWS Cloud Practitioner" },
    { type: "Technical", name: "HTML5, Programming using Java, Javascript – Infosys SpringBoard" },
    { type: "Technical", name: "PCAP - Programming Essentials in Python, Cybersecurity Essentials, Introduction to Packet Tracer - Cisco" },
    { type: "Technical", name: "SQL(Basic), Java (Basic) – HackerRank" },
    { type: "Technical", name: "Introduction to IoT – NPTEL" }
  ];

  const achievements = [
    "Participated in a Hackathon Conducted by Brainovision.",
    "Participated in coding events and workshops (IoT).",
    "Served as Coordinator for Medha-2024 Lakshya Event at LBRCE."
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground">Complete professional profile</p>
        </div>

        {/* Header */}
        <Card className="mb-6 animate-fade-in">
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold text-center mb-4">LIKHITHA KAKARLA</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone size={16} />+91 9032535310</span>
              <span className="flex items-center gap-2"><Mail size={16} />kakarlalikhitha4605@gmail.com</span>
              <span className="flex items-center gap-2"><Linkedin size={16} />Kakarla Likhitha</span>
              <span className="flex items-center gap-2"><Github size={16} />KakarlaLikhitha7</span>
              <span className="flex items-center gap-2"><MapPin size={16} />Vijayawada, Andhra Pradesh – 520011</span>
            </div>
          </CardContent>
        </Card>

        {/* Career Objective */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-primary" />
              Career Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Motivated and detail-oriented developer with hands-on experience in real-world projects across Web Development and AI&ML. Seeking an opportunity to contribute to innovative, scalable applications while applying strong problem-solving abilities and a continuous learning mindset to deliver impactful solutions in a dynamic organization.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                  <p className="text-sm font-medium text-primary">{edu.score}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-primary" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold text-sm mb-2">{category}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="text-primary" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-secondary/10 text-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="text-primary" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="border-l-2 border-secondary pl-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-primary">{project.tech}</p>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Internships */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="text-primary" />
              Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {internships.map((intern, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-4">
                  <h3 className="font-semibold">{intern.role}</h3>
                  <p className="text-sm text-primary">{intern.company}</p>
                  <p className="text-sm text-muted-foreground italic">{intern.period}</p>
                  <p className="text-sm text-muted-foreground">{intern.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    {cert.type === "Global" && <Badge variant="secondary" className="mb-1 bg-primary/20">Global</Badge>}
                    <p className="text-sm">{cert.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Achievements */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-primary" />
              Academic Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
