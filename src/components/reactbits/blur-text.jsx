import { motion } from 'motion/react';

export function BlurText() {
  const lines = [
    ['让', '机', '器'],
    ['理', '解', '世', '界', '。'],
  ];
  let index = 0;
  return lines.map((line, lineIndex) => (
    <span className={lineIndex ? 'blur-line italic-line' : 'blur-line'} key={lineIndex}>
      {line.map((character) => {
        const delay = index++ * 0.065;
        return (
          <motion.span
            key={`${character}-${delay}`}
            initial={{ filter: 'blur(14px)', opacity: 0, y: 30 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {character}
          </motion.span>
        );
      })}
    </span>
  ));
}
