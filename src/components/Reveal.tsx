import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades + lifts its children in when they enter the viewport. */
export function Reveal({ children, delay = 0, y = 28, ...rest }: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Masked line-by-line headline reveal. The (untransformed) mask is the in-view
 * trigger — observing the translated line itself fails, because the mask clips it.
 */
export function SplitLines({ lines, className, delay = 0 }: { lines: ReactNode[]; className?: string; delay?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block overflow-hidden pb-[0.08em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -5% 0px' }}
        >
          <motion.span
            className={`block ${className ?? ''}`}
            variants={{ hidden: { y: '105%' }, show: { y: '0%' } }}
            transition={{ duration: 0.9, delay: delay + i * 0.1, ease }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </>
  );
}

export { ease };
