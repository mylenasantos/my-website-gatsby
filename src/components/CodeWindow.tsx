import { useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { cx } from '../lib/accent';

type Tok = [string, string?];
const C = { k: 'text-pink', s: 'text-butter', n: 'text-coral', c: 'text-cream/45', p: 'text-cream', f: 'text-[#9db4ff]' };

const LINES: Tok[][] = [
  [['const ', C.k], ['mylena', C.f], [': ', C.p], ['Engineer', C.n], [' = {', C.p]],
  [['  role: ', C.p], ["'Tech Lead'", C.s], [',', C.p]],
  [['  years: ', C.p], ['10', C.n], [',', C.p]],
  [['  stack: [', C.p], ["'React'", C.s], [', ', C.p], ["'Next.js'", C.s], [', ', C.p], ["'TS'", C.s], ['],', C.p]],
  [['  leads: ', C.p], ['true', C.k], [',', C.p]],
  [['};', C.p]],
  [['ship', C.f], ['(mylena); ', C.p], ['// what comes next', C.c]],
];

const FULL = LINES.map((l) => l.map((t) => t[0]).join('')).join('\n');

/** A small editor window that types its code once it mounts. */
export function CodeWindow({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const total = FULL.length;
  const [count, setCount] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) return setCount(total);
    let i = 0;
    const start = setTimeout(function tick() {
      i += 1;
      setCount(i);
      if (i < total) timer = setTimeout(tick, FULL[i] === '\n' ? 120 : 26);
    }, 900);
    let timer = start;
    return () => clearTimeout(timer);
  }, [reduce, total]);

  // Character offset where each line starts (+1 per newline).
  const starts = useMemo(() => {
    let acc = 0;
    return LINES.map((l) => {
      const s = acc;
      acc += l.reduce((n, t) => n + t[0].length, 0) + 1;
      return s;
    });
  }, []);

  const renderLine = (line: Tok[], from: number) => {
    let left = count - from;
    return line.map(([text, cls], ti) => {
      if (left <= 0) return null;
      const part = text.slice(0, left);
      left -= text.length;
      return <span key={ti} className={cls}>{part}</span>;
    });
  };
  const cursorLine = starts.findLastIndex((s) => count >= s);

  return (
    <figure className={cx('w-[300px] overflow-hidden rounded-2xl bg-plum text-[11.5px] leading-[1.7] shadow-[0_30px_60px_-20px_rgba(40,21,47,0.55)] ring-1 ring-cream/10 sm:w-[340px] sm:text-[12.5px]', className)}>
      <figcaption className="flex items-center gap-1.5 border-b border-cream/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-butter" />
        <span className="h-2.5 w-2.5 rounded-full bg-violet" />
        <span className="ml-3 font-mono text-[10.5px] text-cream/60">mylena.ts</span>
      </figcaption>
      <pre className="px-4 py-3 font-mono" aria-label={FULL}>
        <code aria-hidden="true">
          {LINES.map((line, i) => (
            <span key={i} className="flex">
              <span className="mr-3 w-3 select-none text-right text-cream/25">{i + 1}</span>
              <span className="whitespace-pre">
                {renderLine(line, starts[i])}
                {i === cursorLine && (
                  <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-blink bg-pink" />
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
