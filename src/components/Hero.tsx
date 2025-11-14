import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-likhitha.jpg";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: "1s"
        }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-glow" />
            <img src={profileImage} alt="Kakarla Likhitha" className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl" />
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Kakarla Likhitha
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gradient font-semibold">
                                                                                      Web Designer | AI & ML Enthusiast         
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Building intelligent solutions through creativity and technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-teal transition-all duration-300" onClick={() => document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Explore My Work
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300" onClick={() => document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <a href="#about" className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;