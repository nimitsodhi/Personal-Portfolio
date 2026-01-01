import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: 'https://github.com/NimitSodhi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nimit-sodhi', label: 'LinkedIn' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

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
            04 — Get in Touch
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's build something{' '}
            <span className="text-gradient">amazing together</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing
            new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name field */}
            <div className="relative">
              <motion.label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                  ? 'text-xs text-primary top-2'
                  : 'text-muted-foreground top-1/2 -translate-y-1/2'
                  }`}
              >
                Your Name
              </motion.label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-muted/50 border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                required
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <motion.label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                  ? 'text-xs text-primary top-2'
                  : 'text-muted-foreground top-1/2 -translate-y-1/2'
                  }`}
              >
                Your Email
              </motion.label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-muted/50 border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                required
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <motion.label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                  ? 'text-xs text-primary top-2'
                  : 'text-muted-foreground top-4'
                  }`}
              >
                Your Message
              </motion.label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className="w-full bg-muted/50 border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                required
              />
            </div>

            <MagneticButton variant="primary" className="w-full flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </MagneticButton>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Info cards */}
            <div className="space-y-4">
              <motion.a
                href="mailto:Nimit.sodhi01@gmail.com"
                className="flex items-center gap-4 glass-card p-6 hover-glow group"
                whileHover={{ x: 10 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium group-hover:text-primary transition-colors">
                    Nimit.sodhi01@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass-card p-6"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">San Francisco, CA</div>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
