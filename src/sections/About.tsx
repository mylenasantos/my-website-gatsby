import { motion } from 'framer-motion';
import { Compass, Gauge, Layers, RefreshCcw, Sprout, Users, Waypoints, type LucideIcon } from 'lucide-react';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Sparkle } from '../components/Shapes';
import { about } from '../data/content';
import { accentStyles, cx } from '../lib/accent';

const icons: Record<string, LucideIcon> = { Layers, RefreshCcw, Compass, Gauge, Sprout, Users, Waypoints };
const tileAccents = ['violet', 'pink', 'cobalt', 'coral', 'butter', 'violet', 'cobalt'] as const;

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel n="01" label="About" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <h2 id="about-title" className="font-serif text-giant lg:col-span-8">
            <SplitLines
              lines={[
                'Not just writing code.',
                <>
                  <em className="text-violet">Shaping</em> how technology
                </>,
                <>
                  moves <span className="marker" style={{ ['--marker' as string]: '#FDE3EE' }}>forward.</span>
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.2} className="flex flex-col justify-end lg:col-span-4">
            <p className="text-lg leading-relaxed text-plum/85">{about.lead}</p>
            <p className="mt-6 border-l-2 border-pink pl-4 font-serif text-2xl italic leading-snug">Built with intelligence. Designed with intention.</p>
          </Reveal>
        </div>

        {/* Bento */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-butter p-7 text-plum">
            <p className="font-serif text-[7.5rem] leading-none tracking-tight">10</p>
            <p className="mt-2 max-w-[14ch] text-lg font-medium">years in software engineering</p>
            <Sparkle className="absolute -right-6 -top-6 h-28 w-28 opacity-60" color="#FF725E" />
          </Reveal>
          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] bg-violet p-7 text-cream">
            <p className="font-serif text-[7.5rem] leading-none tracking-tight">
              5<span className="text-butter">+</span>
            </p>
            <p className="mt-2 max-w-[14ch] text-lg font-medium">years in technical leadership</p>
            <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full border-[18px] border-pink/70" />
          </Reveal>
          <Reveal delay={0.16} className="on-dark relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-cobalt p-7 text-cream sm:col-span-2">
            <p className="eyebrow text-cream/80">Manifesto, line 1</p>
            <p className="mt-10 font-serif text-5xl leading-[0.95] sm:text-6xl">
              Engineering <br />
              has <em className="text-butter">no gender.</em>
            </p>
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,#F45B9A,transparent_70%)] opacity-80" />
          </Reveal>

          {about.abilities.map((a, i) => {
            const Icon = icons[a.icon];
            const acc = accentStyles[tileAccents[i]];
            return (
              <Reveal key={a.title} delay={0.04 * i}>
                <motion.article
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-plum/12 bg-cream-deep/60 p-7 transition-colors duration-500 hover:border-transparent"
                >
                  <motion.span
                    aria-hidden="true"
                    variants={{ rest: { scale: 0 }, hover: { scale: 1 } }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={cx('absolute -left-10 -top-10 h-[200%] w-[200%] origin-top-left rounded-full', acc.bg)}
                  />
                  <div className={cx('relative transition-colors duration-300', acc.dark ? 'group-hover:text-cream' : '')}>
                    <motion.span
                      variants={{ rest: { rotate: 0 }, hover: { rotate: -12 } }}
                      className={cx('inline-flex h-12 w-12 items-center justify-center rounded-2xl', acc.bg, acc.fg, 'group-hover:bg-cream group-hover:text-plum')}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </motion.span>
                    <h3 className="mt-6 font-serif text-[1.9rem] leading-tight">{a.title}</h3>
                    <p className={cx('mt-3 leading-relaxed', acc.dark ? 'text-plum/80 group-hover:text-cream/90' : 'text-plum/80')}>{a.body}</p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}

          <Reveal delay={0.3} className="relative flex items-end overflow-hidden rounded-[2rem] bg-pink p-7 text-plum">
            <Sparkle className="absolute right-6 top-6 h-14 w-14 animate-spin-slow" color="#28152F" />
            <p className="font-serif text-4xl leading-[1]">
              Breaking patterns, <em>building possibilities.</em>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
