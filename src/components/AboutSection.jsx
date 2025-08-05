import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer and Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I specialize in building dynamic and responsive web applications
              using technologies like React, Node.js, Express, and MongoDB. As a
              fresher, I bring strong dedication, problem-solving skills, and a
              keen eye for clean and efficient code.
            </p>

            <p className="text-muted-foreground">
              I'm Passionate about Crafting user-friendly digital experiences,
              writing clean and maintainable code, and exploring innovative
              solutions that make a real impact. I enjoy turning ideas into
              functional and visually appealing web interfaces, and I’m driven
              by curiosity and creativity in everything I build.
            </p>
            <div className="flex flex--col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/projects/CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duartion-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                  
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX</h4>
                    <p className="text-muted-foreground">
                      Designing intuitive user interfaces and seamless user
                      experiences
                    </p>
                  </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                  
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Project Management
                    </h4>
                    <p className="text-muted-foreground">
                      Leading projects from conception to deployment using MERN
                      stack methodologies.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
