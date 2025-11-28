import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
          <Button 
            onClick={handleDownload}
            size="lg"
            className="gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
