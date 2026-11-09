import { ArrowUp } from 'lucide-react';
import { profile } from '../data/content';

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-plum pb-8 pt-16 text-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-md font-serif text-3xl italic leading-tight">Built with intelligence. Designed with intention.</p>
          <a href="#top" className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-cream/30 px-5 text-sm transition-colors hover:border-butter hover:text-butter">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
        <p aria-hidden="true" className="mt-12 select-none whitespace-nowrap bg-gradient-to-r from-violet via-pink to-butter bg-clip-text font-serif text-[17.5vw] leading-[0.8] text-transparent lg:text-[15.2rem]">
          Mylena Santos
        </p>
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-cream/15 pt-6 font-mono text-xs text-cream/70">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
          <p>Designed & built with React, TypeScript, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
