import { Card } from "@/components/ui/card";
import { Palette, Layout, Smartphone } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-border p-8 hover:border-primary transition-all duration-300 hover:glow-teal animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex gap-4 text-primary">
                <Palette className="w-12 h-12" />
                <Layout className="w-12 h-12" />
                <Smartphone className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Web Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in designing user-friendly, responsive, and visually appealing websites that provide 
                  exceptional user experiences. From concept to implementation, I create modern web solutions that 
                  are both functional and beautiful. My designs focus on clean layouts, intuitive navigation, and 
                  responsive interfaces that work seamlessly across all devices.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Responsive & Mobile-First Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Modern UI/UX Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Clean & Maintainable Code
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
