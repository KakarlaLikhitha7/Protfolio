import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/LikhithaResume.pdf';
    link.download = 'Likhitha_Kakarla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground">Download my complete resume</p>
        </div>

        <Card className="animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <FileText className="text-primary" />
              Professional Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <p className="text-center text-muted-foreground">
              Download my comprehensive resume to learn more about my skills, experience, and qualifications.
            </p>
            <Button onClick={handleDownload} size="lg" className="gap-2">
              <Download size={20} />
              Download Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
