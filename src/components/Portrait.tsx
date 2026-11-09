import { profile } from '../data/content';
import { cx } from '../lib/accent';
import { Sparkle } from './Shapes';

/**
 * Arch-shaped portrait frame. Shows the real photo (duotone-treated) when
 * profile.portrait is set; otherwise a typographic composition — never a fake photo.
 */
export function Portrait({ className }: { className?: string }) {
  return (
    <div className={cx('relative aspect-[4/5] overflow-hidden rounded-t-full bg-gradient-to-b from-violet via-pink to-coral', className)}>
      {profile.portrait ? (
        <>
          <img
            src={profile.portrait}
            alt="Portrait of Mylena Santos"
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet via-pink to-coral mix-blend-multiply" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[12%] text-cream" aria-hidden="true">
          <div className="absolute inset-x-[14%] top-[16%] aspect-square rounded-full border border-cream/40" />
          <div className="absolute inset-x-[26%] top-[28%] aspect-square rounded-full border border-cream/25" />
          <Sparkle className="absolute right-[18%] top-[18%] h-8 w-8" color="#F9D978" />
          <span className="relative font-serif text-[clamp(7rem,16vw,12rem)] italic leading-[0.8]">M</span>
          <span className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-cream/85">Santos · est. 2016</span>
        </div>
      )}
    </div>
  );
}

/** Circular text badge that slowly rotates — the site's visual signature. */
export function OrbitBadge({ words, className }: { words: string[]; className?: string }) {
  const text = words.map((w) => w.toUpperCase()).join(' ✦ ') + ' ✦ ';
  return (
    <div className={cx('relative h-32 w-32 sm:h-36 sm:w-36', className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="orbit" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#F9D978" />
        <text className="font-mono" fontSize="12.4" letterSpacing="1.6" fill="#28152F">
          <textPath href="#orbit" textLength="486">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-plum font-serif text-2xl italic text-butter">
        10y
      </span>
    </div>
  );
}
