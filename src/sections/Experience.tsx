import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { education, experience } from '../data/content';
import { accentStyles, cx } from '../lib/accent';

export function Experience() {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel n="05" label="Experience" />
            <h2 id="experience-title" className="mt-8 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.98]">
              <SplitLines lines={['Ten years,', 'one direction:', <em className="text-[#E2553F]">forward.</em>]} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-plum/80">From intern to Tech Lead — every step built on the one before it.</p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol ref={list} className="relative">
            {/* track + scroll-drawn progress line */}
            <span aria-hidden="true" className="absolute bottom-2 left-[15px] top-2 w-[2px] bg-plum/10" />
            <motion.span aria-hidden="true" style={{ scaleY }} className="absolute bottom-2 left-[15px] top-2 w-[2px] origin-top bg-gradient-to-b from-violet via-pink to-butter" />

            {experience.map((r, i) => {
              const a = accentStyles[r.accent];
              const current = r.period?.includes('Present');
              return (
                <li key={r.role + r.company} className="relative pb-10 pl-14 last:pb-0">
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '0px 0px -20% 0px' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className={cx('absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-cream', a.bg)}
                  >
                    {current && <span className="absolute inset-0 animate-ping rounded-full bg-violet opacity-40" />}
                  </motion.span>
                  <Reveal delay={0.05 * i}>
                    <article className="group rounded-[2rem] border border-plum/10 bg-cream-deep/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-plum/20 hover:bg-cream-deep hover:shadow-[0_24px_50px_-28px_rgba(40,21,47,0.45)] sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        {r.period && <p className="font-mono text-sm text-plum/75">{r.period}</p>}
                        {current && <span className="rounded-full bg-violet px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-cream">Now</span>}
                      </div>
                      <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{r.role}</h3>
                      <p className="mt-1 font-medium text-plum/80">{r.company}</p>
                      <ul className="mt-4 space-y-2">
                        {r.points.map((p) => (
                          <li key={p} className="flex gap-3 leading-relaxed text-plum/80">
                            <span aria-hidden="true" className={cx('mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full', a.bg)} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <div className="mt-20">
            <h3 className="eyebrow flex items-center gap-2 text-plum/75">
              <GraduationCap size={16} aria-hidden="true" /> Education & development
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {education.map((e, i) => {
                const a = accentStyles[e.accent];
                return (
                  <li key={e.school}>
                    <Reveal delay={i * 0.08} className={cx('relative h-full overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-500 hover:-rotate-2', a.bg, a.fg)}>
                      {/* ticket notches */}
                      <span aria-hidden="true" className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-cream" />
                      <span aria-hidden="true" className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-cream" />
                      <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-85">{e.school}</p>
                      <p className="mt-8 font-serif text-2xl leading-tight">{e.course}</p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
