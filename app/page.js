import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import EduFlowSection from "./components/homepage/eduflow";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import MotionEffects from "./components/animation/motion-effects";

export default async function Home() {
  return (
    <div>
      <MotionEffects />
      <HeroSection />
      <EduFlowSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog /> 
      <ContactSection />
    </div>
  );
}
