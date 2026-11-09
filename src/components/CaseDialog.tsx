import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, User, Users, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { CaseStudy } from '../data/content';
import { accentStyles, cx } from '../lib/accent';
import { Diagram } from './Diagrams';
import { diagramColors } from './caseColors';
import { ease } from './Reveal';

interface Props {
  study: CaseStudy | null;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
  position: string;
}

/** Full case study in a native modal <dialog> (focus trapping, Esc and inert background for free). */
export function CaseDialog({ study, onClose, onNav, position }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (study && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    if (!study && d.open) d.close();
    scrollRef.current?.scrollTo({ top: 0 });
  }, [study]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onDialogClose = () => {
      document.documentElement.style.overflow = '';
      onClose();
    };
    d.addEventListener('close', onDialogClose);
    return () => d.removeEventListener('close', onDialogClose);
  }, [onClose]);

  const a = study ? accentStyles[study.accent] : null;
  const colors = study ? diagramColors[study.accent] : null;

  return (
    <dialog
      ref={ref}
      className="dialog-reset"
      aria-labelledby="case-title"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') onNav(1);
        if (e.key === 'ArrowLeft') onNav(-1);
      }}
    >
      {study && a && colors && (
        <motion.div
          key={study.id}
          ref={scrollRef}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="ml-auto h-full w-full max-w-[920px] overflow-y-auto bg-cream text-plum shadow-2xl sm:rounded-l-[2.5rem]"
        >
          <header className={cx('relative px-6 pb-8 pt-6 sm:px-12 sm:pb-12', a.bg, a.fg, a.dark && 'on-dark')}>
            <div className="flex items-center justify-between gap-3">
              <p className="eyebrow opacity-85">Case study {position}</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => onNav(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-current transition hover:bg-black/10" aria-label="Previous case study">
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => onNav(1)} className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-current transition hover:bg-black/10" aria-label="Next case study">
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => ref.current?.close()} className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-plum transition hover:rotate-90" aria-label="Close case study" autoFocus>
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-8 grid items-end gap-6 md:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="font-serif text-7xl leading-none opacity-90">{study.index}</p>
                <p className="eyebrow mt-4 opacity-85">{study.kicker}</p>
                <h2 id="case-title" className="mt-2 font-serif text-4xl leading-[1] sm:text-5xl">{study.title}</h2>
              </div>
              <div className="aspect-[400/260] w-full">
                <Diagram kind={study.diagram} {...colors} />
              </div>
            </div>
          </header>

          <div className="space-y-12 px-6 py-10 sm:px-12 sm:py-14">
            <section aria-labelledby="c-challenge">
              <h3 id="c-challenge" className="eyebrow text-violet">The challenge</h3>
              <p className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{study.challenge}</p>
            </section>

            <section aria-label="Contribution" className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-plum p-7 text-cream">
                <h3 className="flex items-center gap-2 font-medium">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-butter text-plum"><User size={16} aria-hidden="true" /></span>
                  My contribution
                </h3>
                <ul className="mt-5 space-y-3">
                  {study.mine.map((m) => (
                    <li key={m} className="flex gap-3 leading-relaxed text-cream/90">
                      <Check size={18} className="mt-1 shrink-0 text-butter" aria-hidden="true" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border-2 border-plum/15 p-7">
                <h3 className="flex items-center gap-2 font-medium">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-soft text-plum"><Users size={16} aria-hidden="true" /></span>
                  Team outcome
                </h3>
                <ul className="mt-5 space-y-3">
                  {study.team.map((m) => (
                    <li key={m} className="flex gap-3 leading-relaxed text-plum/85">
                      <Check size={18} className="mt-1 shrink-0 text-violet" aria-hidden="true" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section aria-labelledby="c-decisions">
              <h3 id="c-decisions" className="eyebrow text-violet">Technical decisions</h3>
              <ol className="mt-4 divide-y divide-plum/10 border-y border-plum/10">
                {study.decisions.map((d, i) => (
                  <li key={d} className="flex items-baseline gap-5 py-4">
                    <span className="font-mono text-sm text-pink">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-lg">{d}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="c-stack">
              <h3 id="c-stack" className="eyebrow text-violet">Technologies</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <li key={s} className={cx('rounded-full px-4 py-2 font-mono text-sm', a.soft)}>{s}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="c-impact" className="on-dark relative overflow-hidden rounded-[2rem] bg-plum p-8 text-cream sm:p-10">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,#F45B9A,transparent_68%)] opacity-70" />
              <div aria-hidden="true" className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,#7546E8,transparent_68%)] opacity-80" />
              <h3 id="c-impact" className="eyebrow relative text-butter">Impact</h3>
              <p className="relative mt-3 font-serif text-3xl leading-tight sm:text-4xl">{study.impact}</p>
            </section>

            <p className="font-mono text-xs text-plum/70">Illustrations are abstract representations of the work, not product screenshots.</p>
          </div>
        </motion.div>
      )}
    </dialog>
  );
}
