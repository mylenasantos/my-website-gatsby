import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { color?: string };

export const Sparkle = ({ color = '#3157D5', ...p }: P) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" {...p}>
    <path d="M50 0 C54 34 66 46 100 50 C66 54 54 66 50 100 C46 66 34 54 0 50 C34 46 46 34 50 0Z" fill={color} />
  </svg>
);

export const HalfCircle = ({ color = '#F45B9A', ...p }: P) => (
  <svg viewBox="0 0 100 50" aria-hidden="true" {...p}>
    <path d="M0 50 A50 50 0 0 1 100 50Z" fill={color} />
  </svg>
);

export const Squiggle = ({ color = '#FF725E', ...p }: P) => (
  <svg viewBox="0 0 200 40" fill="none" aria-hidden="true" {...p}>
    <path d="M4 20 Q 24 2 44 20 T 84 20 T 124 20 T 164 20 T 196 20" stroke={color} strokeWidth="7" strokeLinecap="round" />
  </svg>
);

export const Blob = ({ color = '#F9D978', ...p }: P) => (
  <svg viewBox="0 0 200 200" aria-hidden="true" {...p}>
    <path
      fill={color}
      d="M44.6,-61.9C56.9,-52.1,65,-37.5,70.4,-21.6C75.8,-5.7,78.5,11.5,72.9,25.6C67.3,39.7,53.4,50.6,38.5,59.3C23.6,68,7.6,74.5,-9.3,75.6C-26.2,76.7,-43.9,72.4,-56.1,61.6C-68.3,50.8,-75,33.4,-77.3,15.9C-79.6,-1.6,-77.6,-19.3,-69.4,-33.3C-61.2,-47.3,-46.9,-57.7,-32.1,-66.9C-17.3,-76.2,-2,-84.3,12.1,-81.4C26.2,-78.6,32.4,-71.7,44.6,-61.9Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const Arch = ({ color = '#7546E8', ...p }: P) => (
  <svg viewBox="0 0 100 120" aria-hidden="true" {...p}>
    <path d="M0 120 V50 A50 50 0 0 1 100 50 V120Z" fill={color} />
  </svg>
);

/** Brand mark: a serif "M" between code braces. */
export const Monogram = ({ className }: { className?: string }) => (
  <span className={className} aria-hidden="true">
    <span className="font-mono text-[0.55em] align-middle opacity-70">{'{'}</span>
    <span className="font-serif italic">M</span>
    <span className="font-mono text-[0.55em] align-middle opacity-70">{'}'}</span>
  </span>
);
