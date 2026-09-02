import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function BentoGrid({ children, className }) {
  return <div className={cn('magic-bento-grid', className)}>{children}</div>;
}

export function BentoCard({ className, children, delay = 0 }) {
  return (
    <motion.article
      className={cn('platform-card magic-card', className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--magic-x', `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty('--magic-y', `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </motion.article>
  );
}
