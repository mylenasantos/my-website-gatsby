import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileDown } from 'lucide-react';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Button } from '../components/Button';
import { CodeWindow } from '../components/CodeWindow';
import { OrbitBadge, Portrait } from '../components/Portrait';
import { ease } from '../components/Reveal';
import { Blob, HalfCircle, Sparkle, Squiggle } from '../components/Shapes';
import { profile } from '../data/content';

function RotatingWord({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [reduce, words.length]);
  return (
    <span className="relative inline-flex h-[1.5em] min-w-[14.5ch] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          className="absolute left-0 whitespace-nowrap rounded-md bg-plum px-2 text-butter"
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-110%' }}
          transition={{ duration: 0.5, ease }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  );
}

const line = (delay: number) => ({
  initial: { y: '108%' },
  animate: { y: '0%' },
  transition: { duration: 1, delay, ease },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Pointer parallax: each layer moves by a different depth.
  const px = (d: number) => useTransform(smx, (v) => v * d);
  const py = (d: number) => useTransform(smy, (v) => v * d);
  const l1 = { x: px(18), y: py(18) };
  const l2 = { x: px(-28), y: py(-22) };
  const l3 = { x: px(40), y: py(30) };

  const onMove = (e: PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section ref={ref} id="top" onPointerMove={onMove} className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24">
      {/* Ambient gradient field — radial gradients only, cheap to animate */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div style={{ x: l2.x, y: l2.y }} className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(244,91,154,0.35),transparent_65%)]" />
        <motion.div style={{ x: l1.x, y: l1.y }} className="absolute -left-48 top-1/3 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(117,70,232,0.22),transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(249,217,120,0.45),transparent_65%)]" />
      </div>

      <div className="container-x">
        {/* Masthead row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-plum/15 pb-4"
        >
          <p className="eyebrow text-plum/75">Portfolio — Issue Nº 10</p>
          <p className="eyebrow hidden text-plum/75 sm:block">Frontend · Architecture · Leadership</p>
          <p className="eyebrow text-plum/75">2016 → Now</p>
        </motion.div>

        <div className="mt-8 grid items-center gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — statement */}
          <div className="relative lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 flex items-center gap-3 font-mono text-sm font-medium uppercase tracking-[0.3em] text-violet"
            >
              <span aria-hidden="true" className="h-[2px] w-8 bg-violet" />
              {profile.name}
            </motion.p>

            <h1 className="font-serif text-mega text-plum">
              <span className="sr-only">{profile.name}, {profile.title}. </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" {...line(0.15)}>
                  She <em className="text-violet">codes.</em>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" {...line(0.28)}>
                  She <span className="marker" style={{ ['--marker' as string]: '#F9D978' }}>leads.</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span className="block text-[0.62em] leading-[0.95]" {...line(0.41)}>
                  She builds <em className="relative inline-block text-[#D63F7F]">
                    what comes next
                    <Squiggle className="absolute -bottom-[0.12em] left-0 h-[0.28em] w-full" color="#FF725E" />
                  </em>
                  <span className="text-coral">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease }} className="mt-8 max-w-xl">
              <p className="text-lg font-medium text-plum sm:text-xl">{profile.title}</p>
              <p className="mt-3 text-base leading-relaxed text-plum/80 sm:text-lg">{profile.intro}</p>
              <p className="mt-5 flex flex-wrap items-center gap-2 font-mono text-sm text-plum/80">
                <span aria-hidden="true" className="text-violet">→</span> Currently thinking in <RotatingWord words={profile.keywords} />
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85, ease }} className="mt-9 flex flex-wrap gap-3">
              <Button href="#work" icon={<ArrowDown size={18} aria-hidden="true" />}>Explore My Work</Button>
              <Button href={profile.resume} download variant="pop" icon={<FileDown size={18} aria-hidden="true" />}>Get My Resume</Button>
              <Button href="#contact" variant="outline" icon={<ArrowUpRight size={18} aria-hidden="true" />}>Let’s Connect</Button>
            </motion.div>
          </div>

          {/* Right — layered composition */}
          <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5" aria-hidden="true">
            <motion.div style={{ y: ySlow }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease }}>
              <motion.div style={l1}>
                <Portrait className="mx-auto w-[78%] shadow-[0_40px_80px_-30px_rgba(117,70,232,0.6)]" />
              </motion.div>
            </motion.div>

            <motion.div style={{ ...l3, y: yFast }} className="absolute -top-8 left-0 origin-top-left scale-[0.88] sm:-left-16 sm:top-[2%] sm:scale-100">
              <motion.div initial={{ opacity: 0, y: 40, rotate: -6 }} animate={{ opacity: 1, y: 0, rotate: -4 }} transition={{ duration: 0.9, delay: 0.6, ease }}>
                <CodeWindow />
              </motion.div>
            </motion.div>

            <motion.div style={{ ...l2, rotate: rot }} className="absolute -right-2 -top-4 sm:-right-6">
              <OrbitBadge words={profile.keywords} />
            </motion.div>

            <motion.div style={l3} className="absolute bottom-[14%] left-[2%]">
              <Sparkle className="h-12 w-12 animate-spin-slow" color="#3157D5" />
            </motion.div>
            <motion.div style={l2} className="absolute -bottom-6 right-[4%]">
              <HalfCircle className="h-14 w-28 rotate-180" color="#F45B9A" />
            </motion.div>
            <motion.div style={l1} className="absolute -right-16 top-1/2 -z-10 hidden sm:block">
              <Blob className="h-40 w-40" color="#F9D978" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
