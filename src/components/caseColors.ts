import type { Accent } from '../data/content';

/** Diagram palette per card background, chosen so every element keeps contrast. */
export const diagramColors: Record<Accent, { ink: string; accent: string; accent2: string }> = {
  violet: { ink: '#FFF8ED', accent: '#F9D978', accent2: '#F45B9A' },
  cobalt: { ink: '#FFF8ED', accent: '#F9D978', accent2: '#F45B9A' },
  plum: { ink: '#FFF8ED', accent: '#F45B9A', accent2: '#F9D978' },
  butter: { ink: '#28152F', accent: '#7546E8', accent2: '#FFF8ED' },
  pink: { ink: '#28152F', accent: '#F9D978', accent2: '#FFF8ED' },
  coral: { ink: '#28152F', accent: '#F9D978', accent2: '#FFF8ED' },
};
