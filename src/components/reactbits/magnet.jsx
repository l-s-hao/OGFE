import { motion, useMotionValue, useSpring } from 'motion/react';

export function Magnet({ children, strength = 0.22 }) {
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });
  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div className="magnet" style={{ x, y }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}
