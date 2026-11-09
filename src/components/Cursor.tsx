import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useFinePointer';

/**
 * A soft ring that trails the native cursor (which stays visible) and grows over
 * interactive elements. Desktop + fine pointers only; disabled for reduced motion.
 * Elements can set data-cursor="Label" to show a short hint inside the ring.
 */
export function Cursor() {
  const fine = useMediaQuery('(pointer: fine) and (min-width: 1024px)');
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [state, setState] = useState<{ hover: boolean; label: string | null }>({ hover: false, label: null });

  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement)?.closest?.('a, button, [data-cursor]') as HTMLElement | null;
      const label = t?.getAttribute('data-cursor') ?? null;
      setState((s) => (s.hover === !!t && s.label === label ? s : { hover: !!t, label }));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [fine, reduce, x, y]);

  if (!fine || reduce) return null;
  const size = state.label ? 88 : state.hover ? 52 : 22;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] flex items-center justify-center rounded-full border-2 border-violet font-mono text-[0.65rem] uppercase tracking-widest text-cream"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: size,
        height: size,
        backgroundColor: state.label ? 'rgba(117,70,232,1)' : state.hover ? 'rgba(244,91,154,0.18)' : 'rgba(117,70,232,0)',
        borderColor: state.hover && !state.label ? '#F45B9A' : '#7546E8',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {state.label}
    </motion.div>
  );
}
