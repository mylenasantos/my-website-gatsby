import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Sparkle } from '../components/Shapes';
import { skillClusters, skillLinks } from '../data/content';
import { accentStyles, cx } from '../lib/accent';

const spans: Record<string, string> = {
  frontend: 'lg:col-span-7',
  backend: 'lg:col-span-5',
  quality: 'lg:col-span-4',
  leadership: 'lg:col-span-5',
  ai: 'lg:col-span-3',
};

const clusterOf = Object.fromEntries(skillClusters.flatMap((c) => c.items.map((i) => [i, c.label])));

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;

  const linked = useMemo(() => {
    if (!active) return new Set<string>();
    const set = new Set(skillLinks[active] ?? []);
    // links are treated as bidirectional
    Object.entries(skillLinks).forEach(([k, v]) => v.includes(active) && set.add(k));
    return set;
  }, [active]);

  const state = (s: string) => (!active ? 'idle' : s === active ? 'active' : linked.has(s) ? 'linked' : 'dim');

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel n="03" label="Technical skills" />
            <h2 id="skills-title" className="mt-8 font-serif text-giant">
              <SplitLines lines={['An ecosystem,', <>not a <em className="text-cobalt">checklist.</em></>]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-plum/80">
              No percentages — skills don’t work that way. What matters is how they connect. <strong className="font-medium text-plum">Hover, focus or tap</strong> any technology to see its links across the stack.
            </p>
          </Reveal>
        </div>

        {/* Live connection readout */}
        <div className="mt-10 flex min-h-[3.5rem] items-center gap-3 rounded-full border border-plum/15 bg-cream-deep/60 px-5 py-3 font-mono text-sm" aria-live="polite">
          <Sparkle className="h-4 w-4 shrink-0" color="#7546E8" />
          {active ? (
            <p>
              <span className="font-medium text-violet">{active}</span>
              <span className="text-plum/60"> · {clusterOf[active]} </span>
              <span className="text-plum/80">connects to → {[...linked].join(', ')}</span>
            </p>
          ) : (
            <p className="text-plum/70">Select a technology to trace its connections.</p>
          )}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-12" onMouseLeave={() => setHovered(null)}>
          {skillClusters.map((c, ci) => {
            const a = accentStyles[c.accent];
            return (
              <Reveal key={c.id} delay={ci * 0.06} className={cx('relative overflow-hidden rounded-[2.25rem] p-7 sm:p-9', spans[c.id], a.bg, a.fg, a.dark && 'on-dark')}>
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[14px] border-current opacity-10" />
                <div className="relative flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-4xl leading-none">{c.label}</h3>
                  <span className="font-mono text-xs opacity-80">{String(c.items.length).padStart(2, '0')}</span>
                </div>
                <p className="relative mt-2 text-sm opacity-85">{c.blurb}</p>
                <ul className="relative mt-7 flex flex-wrap gap-2.5">
                  {c.items.map((s) => {
                    const st = state(s);
                    return (
                      <li key={s}>
                        <motion.button
                          type="button"
                          layout
                          aria-pressed={pinned === s}
                          onMouseEnter={() => setHovered(s)}
                          onFocus={() => setHovered(s)}
                          onBlur={() => setHovered(null)}
                          onClick={() => setPinned((p) => (p === s ? null : s))}
                          animate={{ scale: st === 'active' ? 1.08 : st === 'linked' ? 1.04 : 1, opacity: st === 'dim' ? 0.4 : 1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className={cx(
                            'min-h-[40px] rounded-full border-2 px-4 py-1.5 text-[0.95rem] font-medium transition-colors duration-200',
                            st === 'active' && 'border-plum bg-plum text-cream shadow-lg',
                            st === 'linked' && 'border-cream bg-cream text-plum',
                            (st === 'idle' || st === 'dim') && 'border-current bg-transparent',
                          )}
                        >
                          {s}
                        </motion.button>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
