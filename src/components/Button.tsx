import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cx } from '../lib/accent';

type Variant = 'solid' | 'outline' | 'light' | 'pop';

const styles: Record<Variant, string> = {
  solid: 'bg-plum text-cream hover:bg-violet',
  outline: 'border-2 border-plum text-plum hover:bg-plum hover:text-cream',
  light: 'bg-cream text-plum hover:bg-butter',
  pop: 'bg-butter text-plum hover:bg-pink',
};

interface Props {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  download?: boolean | string;
  external?: boolean;
  className?: string;
}

export function Button({ href, children, icon, variant = 'solid', download, external, className }: Props) {
  return (
    <motion.a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={cx(
        'group inline-flex min-h-[48px] items-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors duration-300',
        styles[variant],
        className,
      )}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icon}</span>}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </motion.a>
  );
}
