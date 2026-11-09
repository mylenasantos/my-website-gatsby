import type { Accent } from '../data/content';

/**
 * Color pairings that pass WCAG AA for body text:
 * pink / coral / butter carry plum text; violet / cobalt / plum carry cream text.
 */
export const accentStyles: Record<Accent, { bg: string; fg: string; soft: string; text: string; hex: string; dark: boolean }> = {
  violet: { bg: 'bg-violet', fg: 'text-cream', soft: 'bg-violet-soft', text: 'text-violet', hex: '#7546E8', dark: true },
  cobalt: { bg: 'bg-cobalt', fg: 'text-cream', soft: 'bg-cobalt-soft', text: 'text-cobalt', hex: '#3157D5', dark: true },
  plum: { bg: 'bg-plum', fg: 'text-cream', soft: 'bg-plum/10', text: 'text-plum', hex: '#28152F', dark: true },
  pink: { bg: 'bg-pink', fg: 'text-plum', soft: 'bg-pink-soft', text: 'text-plum', hex: '#F45B9A', dark: false },
  coral: { bg: 'bg-coral', fg: 'text-plum', soft: 'bg-coral-soft', text: 'text-plum', hex: '#FF725E', dark: false },
  butter: { bg: 'bg-butter', fg: 'text-plum', soft: 'bg-butter-soft', text: 'text-plum', hex: '#F9D978', dark: false },
};

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
