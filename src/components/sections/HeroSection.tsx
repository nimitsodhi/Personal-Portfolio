import { motion, useInView } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import ParticleBackground from '@/components/ParticleBackground';
import { useRef } from 'react';

const HeroSection = () => {
  const headlineWords = "I design & build digital experiences that feel alive.".split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    },
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-32 md:pt-0">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Status badge */}


          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block mr-4 ${word === 'digital' || word === 'alive.' ? 'text-gradient glow-text' : ''
                  }`}
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Creative developer & designer crafting immersive web experiences.
            Passionate about clean code, stunning visuals, and pushing the boundaries of what's possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <MagneticButton variant="primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToSection('contact')}>
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
