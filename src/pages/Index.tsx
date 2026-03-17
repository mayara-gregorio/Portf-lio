import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
