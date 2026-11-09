import { motion, useReducedMotion } from 'framer-motion';
import type { CaseStudy } from '../data/content';

/**
 * Abstract, original illustrations for each case study.
 * They represent the *shape* of the work — they are not product screenshots.
 */

type DProps = { ink: string; accent: string; accent2: string };

const draw = (delay = 0) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as const },
});
const pop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.6 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});
const mono = { fontFamily: '"JetBrains Mono", monospace' };

function Migration({ ink, accent, accent2 }: DProps) {
  const routes = [
    { y: 50, label: 'SSR', c: accent },
    { y: 130, label: 'SSG', c: accent2 },
    { y: 210, label: 'CSR', c: ink },
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <motion.g {...pop(0)} style={{ transformOrigin: '70px 130px' }}>
        <rect x="14" y="60" width="112" height="140" rx="14" fill="none" stroke={ink} strokeWidth="2" strokeDasharray="5 6" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="30" y={80 + i * 22} width={80 - (i % 2) * 22} height="10" rx="5" fill={ink} opacity={0.35} />
        ))}
        <text x="70" y="226" textAnchor="middle" fill={ink} fontSize="12" style={mono}>create-react-app</text>
      </motion.g>
      <motion.path d="M134 130 C 180 130, 180 130, 214 130" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" {...draw(0.3)} />
      <motion.path d="M206 122 L216 130 L206 138" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" {...draw(0.8)} />
      <motion.g {...pop(0.6)} style={{ transformOrigin: '250px 130px' }}>
        <circle cx="250" cy="130" r="30" fill={ink} />
        <text x="250" y="135" textAnchor="middle" fontSize="13" fontWeight="600" fill="#28152F" style={mono}>next</text>
      </motion.g>
      {routes.map((r, i) => (
        <g key={r.label}>
          <motion.path d={`M280 130 C 310 130, 300 ${r.y}, 330 ${r.y}`} stroke={ink} strokeWidth="2" fill="none" {...draw(0.9 + i * 0.15)} />
          <motion.g {...pop(1.2 + i * 0.15)} style={{ transformOrigin: `360px ${r.y}px` }}>
            <rect x="330" y={r.y - 16} width="58" height="32" rx="16" fill={r.c} />
            <text x="359" y={r.y + 5} textAnchor="middle" fontSize="12" fontWeight="600" fill="#28152F" style={mono}>{r.label}</text>
          </motion.g>
        </g>
      ))}
    </svg>
  );
}

function Marketplace({ ink, accent, accent2 }: DProps) {
  const cards = Array.from({ length: 6 }, (_, i) => ({ x: 128 + (i % 3) * 88, y: 72 + Math.floor(i / 3) * 92 }));
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <motion.rect x="12" y="12" width="376" height="236" rx="18" fill="none" stroke={ink} strokeWidth="2" {...draw(0)} />
      <motion.g {...pop(0.2)}>
        <rect x="28" y="28" width="344" height="28" rx="14" fill={ink} opacity="0.18" />
        <rect x="40" y="37" width="90" height="10" rx="5" fill={ink} />
        <rect x="286" y="34" width="74" height="16" rx="8" fill={accent} />
      </motion.g>
      <motion.g {...pop(0.35)}>
        <rect x="28" y="72" width="88" height="160" rx="12" fill={ink} opacity="0.12" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="40" y={88 + i * 22} width={60 - (i % 2) * 18} height="8" rx="4" fill={ink} opacity="0.55" />
        ))}
        <text x="72" y="210" textAnchor="middle" fontSize="10" fill={ink} style={mono}>{'<Filters/>'}</text>
      </motion.g>
      {cards.map((c, i) => (
        <motion.g key={i} {...pop(0.5 + i * 0.08)} style={{ transformOrigin: `${c.x + 40}px ${c.y + 40}px` }}>
          <rect x={c.x} y={c.y} width="80" height="80" rx="12" fill={i === 1 ? accent2 : ink} opacity={i === 1 ? 1 : 0.92} />
          <rect x={c.x + 10} y={c.y + 10} width="60" height="34" rx="8" fill={i === 1 ? ink : accent} opacity={i === 1 ? 0.5 : 0.9} />
          <rect x={c.x + 10} y={c.y + 52} width="44" height="7" rx="3.5" fill="#28152F" opacity="0.5" />
          <rect x={c.x + 10} y={c.y + 64} width="28" height="7" rx="3.5" fill="#28152F" opacity="0.3" />
        </motion.g>
      ))}
    </svg>
  );
}

function Accessibility({ ink, accent, accent2 }: DProps) {
  const r = 78;
  const circ = Math.PI * r; // half circle
  const checks = ['Contrast', 'Semantics', 'Labels', 'Keyboard'];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <g transform="translate(110 160)">
        <path d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`} fill="none" stroke={ink} strokeOpacity="0.15" strokeWidth="18" strokeLinecap="round" />
        <motion.path
          d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
          fill="none"
          stroke={accent}
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ * 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* the 90 threshold tick */}
        <line x1={r * Math.cos(Math.PI * 0.1)} y1={-r * Math.sin(Math.PI * 0.1)} x2={(r + 22) * Math.cos(Math.PI * 0.1)} y2={-(r + 22) * Math.sin(Math.PI * 0.1)} stroke={ink} strokeWidth="2" />
        <text x={(r + 30) * Math.cos(Math.PI * 0.1)} y={-(r + 28) * Math.sin(Math.PI * 0.1)} fontSize="11" fill={ink} style={mono}>90</text>
        <text x="0" y="-8" textAnchor="middle" fontSize="44" fill={ink} style={{ fontFamily: '"Instrument Serif", serif' }}>90+</text>
        <text x="0" y="22" textAnchor="middle" fontSize="10" fill={ink} style={mono}>LIGHTHOUSE · A11Y</text>
      </g>
      {checks.map((c, i) => (
        <motion.g key={c} {...pop(0.6 + i * 0.15)} style={{ transformOrigin: `250px ${70 + i * 44}px` }}>
          <rect x="236" y={52 + i * 44} width="150" height="34" rx="17" fill={i % 2 ? accent2 : ink} />
          <circle cx="256" cy={69 + i * 44} r="9" fill={i % 2 ? ink : accent} />
          <path d={`M251 ${69 + i * 44} l3.5 3.5 l6 -7`} stroke="#FFF8ED" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="274" y={73 + i * 44} fontSize="12" fill={i % 2 ? ink : accent2} style={mono}>{c}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function Process({ ink, accent }: DProps) {
  const reduce = useReducedMotion();
  const steps = ['Decide', 'Document', 'Review', 'Ship', 'Learn'];
  const R = 88;
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <g transform="translate(200 130)">
        <motion.circle r={R} fill="none" stroke={ink} strokeWidth="2" strokeDasharray="4 7" {...draw(0)} />
        {!reduce && (
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
            <circle cx={R} cy="0" r="7" fill={accent} />
          </motion.g>
        )}
        <text textAnchor="middle" y="-4" fontSize="26" fill={ink} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>written</text>
        <text textAnchor="middle" y="20" fontSize="26" fill={ink} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>down.</text>
        {steps.map((s, i) => {
          const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * R;
          const y = Math.sin(a) * R;
          const w = s.length * 8 + 22;
          return (
            <motion.g key={s} {...pop(0.3 + i * 0.12)} style={{ transformOrigin: `${x}px ${y}px` }}>
              <rect x={x - w / 2} y={y - 14} width={w} height="28" rx="14" fill={i === 1 ? accent : ink} />
              <text x={x} y={y + 4} textAnchor="middle" fontSize="11.5" fill={i === 1 ? ink : '#F45B9A'} style={mono}>{s}</text>
            </motion.g>
          );
        })}
      </g>
    </svg>
  );
}

function Microservice({ ink, accent, accent2 }: DProps) {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 46, label: 'App', sub: 'client' },
    { x: 150, label: 'API', sub: 'REST' },
    { x: 254, label: 'λ', sub: 'NestJS' },
    { x: 354, label: 'DB', sub: 'TypeORM' },
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <motion.rect x="200" y="56" width="196" height="150" rx="20" fill="none" stroke={accent2} strokeWidth="2" strokeDasharray="6 6" {...draw(0)} />
      <text x="298" y="46" textAnchor="middle" fontSize="10" fill={accent2} style={mono}>AWS LAMBDA · ISOLATED</text>
      <motion.line x1="70" y1="131" x2="330" y2="131" stroke={ink} strokeOpacity="0.5" strokeWidth="2" {...draw(0.3)} />
      {!reduce && (
        <motion.rect
          y="125"
          width="16"
          height="12"
          rx="3"
          fill={accent}
          initial={{ x: 70 }}
          animate={{ x: [70, 316, 70] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {nodes.map((n, i) => (
        <motion.g key={n.sub} {...pop(0.2 + i * 0.15)} style={{ transformOrigin: `${n.x}px 131px` }}>
          <circle cx={n.x} cy="131" r="30" fill={i === 2 ? accent : ink} />
          <text x={n.x} y="137" textAnchor="middle" fontSize={n.label === 'λ' ? 24 : 15} fontWeight="600" fill="#28152F" style={n.label === 'λ' ? { fontFamily: 'serif' } : mono}>{n.label}</text>
          <text x={n.x} y="184" textAnchor="middle" fontSize="10.5" fill={ink} style={mono}>{n.sub}</text>
        </motion.g>
      ))}
      <motion.text {...pop(1)} x="98" y="224" textAnchor="middle" fontSize="10" fill={ink} opacity="0.75" style={mono}>request → token → reset</motion.text>
    </svg>
  );
}

const map = { migration: Migration, marketplace: Marketplace, accessibility: Accessibility, process: Process, microservice: Microservice };

export function Diagram({ kind, ...p }: { kind: CaseStudy['diagram'] } & DProps) {
  const C = map[kind];
  return (
    <div className="h-full w-full" role="img" aria-label={`Abstract diagram of the ${kind} work. Illustrative, not a product screenshot.`}>
      <C {...p} />
    </div>
  );
}
