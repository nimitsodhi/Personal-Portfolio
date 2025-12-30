import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Rocket } from 'lucide-react';

const skills = [
  { label: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { label: 'TypeScript', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { label: 'Next.js', color: 'bg-white/10 text-white border-white/20' },
  { label: 'Tailwind CSS', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
  { label: 'Framer Motion', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { label: 'Node.js', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { label: 'Figma', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { label: 'AI/ML', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
];

const highlights = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: Palette, title: 'Design Systems', description: 'Creating consistent, beautiful UIs' },
  { icon: Sparkles, title: 'AI-Assisted', description: 'Leveraging AI for innovation' },
  { icon: Rocket, title: 'Performance', description: 'Optimized for speed & UX' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="inline-block text-primary font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              01 — About Me
            </motion.span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Turning ideas into{' '}
              <span className="text-gradient">digital reality</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate developer and designer who thrives at the intersection of 
                creativity and technology. With a keen eye for detail and a love for clean code, 
                I craft experiences that are both beautiful and functional.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new AI tools, participating in 
                hackathons, or sketching out my next big idea. I believe in continuous learning 
                and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Skills tags */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${skill.color} hover:scale-105 transition-transform cursor-default`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  data-cursor-hover
                >
                  {skill.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
