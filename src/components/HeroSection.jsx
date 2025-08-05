import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image - responsive */}
          <div className="opacity-0 animate-fade-in">
            <img
              src="/projects/me.jpg" // replace with your actual image path
              alt="Manisha Banerjee"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          {/* Name - responsive text */}
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
            Hi, I'm{" "}
            <span className="text-primary">Manisha</span>
            <span className="text-gradient ml-1">Banerjee</span>
          </h1>

          {/* Description - properly spaced */}
          <p className="text-base md:text-xl text-muted-foreground max-w-md md:max-w-2xl opacity-0 animate-fade-in-delay-2 px-2">
            A dedicated and enthusiastic Full Stack Developer. I have a deep passion for creating
            seamless, user-centric web applications and am constantly driven by curiosity and a
            desire to learn and grow in the ever-evolving tech landscape.
          </p>

          {/* Button */}
          <div className="pt-2 md:pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </div>
    </section>
  );
};
