import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Custom cursor (desktop only) */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
