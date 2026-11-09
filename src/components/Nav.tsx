import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { nav, profile } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import { cx } from '../lib/accent';
import { Monogram } from './Shapes';
import { ease } from './Reveal';

const ids = nav.map((n) => n.id);

export function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <div className="container-x">
        <nav
          aria-label="Primary"
          className={cx(
            'flex items-center justify-between rounded-full py-2 pl-5 pr-2 transition-all duration-500',
            scrolled || open ? 'bg-cream/85 shadow-[0_8px_30px_-12px_rgba(40,21,47,0.25)] ring-1 ring-plum/10 backdrop-blur-md' : 'bg-transparent',
          )}
        >
          <a href="#top" className="flex items-center gap-2 text-plum" aria-label="Mylena Santos — back to top">
            <Monogram className="text-3xl leading-none" />
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] sm:inline">Mylena Santos</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cx('relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors', active === item.id ? 'text-cream' : 'text-plum hover:text-violet')}
                >
                  {item.label}
                </a>
                {active === item.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-plum" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center gap-1.5 rounded-full bg-violet px-5 text-sm font-medium text-cream transition-colors hover:bg-plum sm:inline-flex"
            >
              Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => (open ? close() : setOpen(true))}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum text-cream lg:hidden"
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="on-dark fixed inset-0 z-[55] flex flex-col justify-between overflow-y-auto bg-plum px-6 pb-10 pt-28 text-cream lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            transition={{ duration: 0.6, ease }}
          >
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <motion.li key={item.id} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06, ease }}>
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-1 font-serif text-5xl sm:text-6xl"
                  >
                    <span className="font-mono text-xs text-butter">0{i + 1}</span>
                    <span className="transition-colors group-hover:text-pink group-hover:italic">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-10 font-serif text-2xl italic text-cream/80">Engineering has no gender.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
