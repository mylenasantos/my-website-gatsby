import { Sparkle } from './Shapes';
import { cx } from '../lib/accent';

/** Infinite ribbon of phrases. Duplicated once so the loop is seamless; the copy is hidden from AT. */
export function Marquee({ items, className, tilt = -2, reverse }: { items: string[]; className?: string; tilt?: number; reverse?: boolean }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-6 pr-6 font-serif text-4xl sm:text-6xl">
          <span className="whitespace-nowrap">{t}</span>
          <Sparkle className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" color="currentColor" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cx('relative overflow-hidden py-5', className)} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className={cx('flex w-max animate-marquee', reverse && '[animation-direction:reverse]')}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
