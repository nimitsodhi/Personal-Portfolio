import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NeoBank Dashboard',
    description: 'A modern fintech dashboard with real-time analytics, beautiful charts, and seamless user experience.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: 'from-cyan-500/20 to-blue-500/20',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Content Studio',
    description: 'An AI-powered content creation platform that helps creators generate stunning visuals and copy.',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: 'from-purple-500/20 to-pink-500/20',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'EcoTracker App',
    description: 'A sustainability tracking app that gamifies eco-friendly habits with rewards and community challenges.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80',
    color: 'from-green-500/20 to-teal-500/20',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Artisan Marketplace',
    description: 'An e-commerce platform connecting artisans with buyers, featuring AR product previews.',
    tech: ['Vue.js', 'Stripe', 'Firebase', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: 'from-orange-500/20 to-red-500/20',
    link: '#',
    github: '#',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-hover
    >
      <div className={`glass-card overflow-hidden rounded-2xl bg-gradient-to-br ${project.color}`}>
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Floating action buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={project.github}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.link}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <motion.div
              animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted/50 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-primary font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            02 — Selected Work
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated collection of projects that showcase my passion for creating 
            beautiful, functional, and innovative digital experiences.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group"
            data-cursor-hover
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
