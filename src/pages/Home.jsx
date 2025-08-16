import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import {ThemeToggle} from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";

import {StartBackground} from "@/components/StartBackground"
export const Home=() =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
 <ThemeToggle/>
   <StartBackground/>
   <Navbar/>
   <main>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectSection/>
    <ContactSection/>
   </main>
   <Footer/>
    </div>
};