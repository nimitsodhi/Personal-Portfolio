import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.span
              className="font-display font-bold text-2xl text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              NS
            </motion.span>
            <span className="text-muted-foreground text-sm">
              © 2026 All rights reserved
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/NimitSodhi', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/nimit-sodhi', label: 'LinkedIn' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
                data-cursor-hover
              >
                <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ y: -3 }}
            data-cursor-hover
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-muted-foreground/50 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Designed & Built with passion
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
