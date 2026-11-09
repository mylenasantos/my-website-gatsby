import { motion, useMotionValue, useReducedMotion, useSpring, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useCallback, useRef, useState, type PointerEvent } from 'react';
import { CaseDialog } from '../components/CaseDialog';
import { diagramColors } from '../components/caseColors';
import { Diagram } from '../components/Diagrams';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { caseStudies, type CaseStudy } from '../data/content';
import { accentStyles, cx } from '../lib/accent';

/** Each case gets its own composition so the grid reads like a magazine spread. */
const layout: Record<string, { span: string; inner: string; diagram: string }> = {
  modernization: { span: 'lg:col-span-12', inner: 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-10', diagram: 'lg:col-span-7 lg:order-2' },
  marketplace: { span: 'lg:col-span-7', inner: '', diagram: '' },
  accessibility: { span: 'lg:col-span-5', inner: '', diagram: '' },
  processes: { span: 'lg:col-span-5', inner: '', diagram: '' },
  recovery: { span: 'lg:col-span-7', inner: '', diagram: '' },
};

function useTilt() {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 5);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };
  return { srx, sry, onMove, reset };
}

function CaseCard({ study, onOpen }: { study: CaseStudy; onOpen: (s: CaseStudy, el: HTMLButtonElement) => void }) {
  const a = accentStyles[study.accent];
  const l = layout[study.id];
  const { srx, sry, onMove, reset } = useTilt();
  const btn = useRef<HTMLButtonElement>(null);
  const wide = study.id === 'modernization';

  return (
    <Reveal className={cx('col-span-1', l.span)}>
      <motion.article
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX: srx as MotionValue<number>, rotateY: sry as MotionValue<number>, transformPerspective: 1200 }}
        data-cursor="Open"
        className={cx('group relative h-full overflow-hidden rounded-[2.5rem] p-7 sm:p-10', a.bg, a.fg, a.dark && 'on-dark')}
      >
        {/* Oversized outlined index */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-10 select-none font-serif text-[11rem] leading-none opacity-20 transition-transform duration-700 group-hover:-translate-y-2 sm:text-[14rem]"
        >
          {study.index}
        </span>

        <div className={cx('relative', l.inner)}>
          <div className={cx('mb-6 aspect-[400/260] w-full transition-transform duration-700 group-hover:scale-[1.03]', l.diagram, wide && 'lg:mb-0')}>
            <Diagram kind={study.diagram} {...diagramColors[study.accent]} />
          </div>

          <div className={cx(wide && 'lg:col-span-5 lg:order-1')}>
            <p className="eyebrow opacity-85">
              {study.index} — {study.kicker}
            </p>
            <h3 className={cx('mt-3 font-serif leading-[0.98]', wide ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl')}>
              <button
                ref={btn}
                type="button"
                onClick={() => btn.current && onOpen(study, btn.current)}
                className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none [&:focus-visible]:after:rounded-[2.5rem] [&:focus-visible]:after:outline [&:focus-visible]:after:outline-[3px] [&:focus-visible]:after:outline-offset-[-6px]"
              >
                {study.title}
              </button>
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed opacity-90">{study.summary}</p>

            {/* Revealed on hover/focus on large screens; always visible on touch layouts */}
            <div className="grid transition-all duration-500 lg:grid-rows-[0fr] lg:opacity-0 lg:group-focus-within:grid-rows-[1fr] lg:group-focus-within:opacity-100 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="mt-4 max-w-md border-l-2 border-current pl-4 text-[0.95rem] leading-relaxed opacity-90">
                  <span className="font-mono text-xs uppercase tracking-widest">Challenge · </span>
                  {study.challenge}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {study.stack.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full border border-current px-3 py-1 font-mono text-xs">
                    {s}
                  </li>
                ))}
              </ul>
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-plum transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const idx = caseStudies.findIndex((c) => c.id === openId);

  const open = useCallback((s: CaseStudy, el: HTMLButtonElement) => {
    trigger.current = el;
    setOpenId(s.id);
  }, []);
  const close = useCallback(() => {
    setOpenId(null);
    trigger.current?.focus();
  }, []);
  const nav = useCallback(
    (d: 1 | -1) => setOpenId((cur) => {
      const i = caseStudies.findIndex((c) => c.id === cur);
      return caseStudies[(i + d + caseStudies.length) % caseStudies.length].id;
    }),
    [],
  );

  return (
    <section id="work" aria-labelledby="work-title" className="relative rounded-t-[3rem] bg-cream-deep py-24 sm:rounded-t-[5rem] sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel n="02" label="Selected work" />
            <h2 id="work-title" className="mt-8 font-serif text-giant">
              <SplitLines lines={['Case studies,', <>told as <em className="text-pink">stories.</em></>]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-plum/80">
              Five pieces of work across architecture, product, quality, process and backend. Each one separates <strong className="font-medium text-plum">what I did</strong> from <strong className="font-medium text-plum">what the team achieved</strong>.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {caseStudies.map((s) => (
            <CaseCard key={s.id} study={s} onOpen={open} />
          ))}
        </div>
      </div>

      <CaseDialog study={idx >= 0 ? caseStudies[idx] : null} onClose={close} onNav={nav} position={idx >= 0 ? `${idx + 1} / ${caseStudies.length}` : ''} />
    </section>
  );
}
