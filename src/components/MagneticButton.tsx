import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const MagneticButton = ({ children, className, onClick, variant = 'primary' }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(180_100%_50%/0.4)]',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary',
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        'relative px-8 py-4 rounded-full font-display font-semibold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden',
        variants[variant],
        className
      )}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      whileTap={{ scale: 0.95 }}
      data-cursor-hover
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default MagneticButton;
