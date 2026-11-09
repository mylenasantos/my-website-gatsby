import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, FileDown, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Arch, Blob, Sparkle } from '../components/Shapes';
import { profile } from '../data/content';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-gradient-to-br from-pink via-coral to-butter py-24 text-plum sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div className="absolute -right-16 top-10" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
          <Sparkle className="h-40 w-40 sm:h-56 sm:w-56" color="#3157D5" />
        </motion.div>
        <Arch className="absolute -bottom-6 left-[6%] h-44 w-36 opacity-90" color="#7546E8" />
        <Blob className="absolute -left-24 top-1/4 h-72 w-72 opacity-50" color="#FFF8ED" />
      </div>

      <div className="container-x relative">
        <SectionLabel n="06" label="Contact" />
        <h2 id="contact-title" className="mt-8 max-w-5xl font-serif text-[clamp(2.4rem,8vw,8rem)] leading-[0.92] tracking-tight">
          <SplitLines
            lines={[
              'Have an ambitious idea?',
              <>
                Let’s <em className="marker" style={{ ['--marker' as string]: '#FFF8ED' }}>make it happen.</em>
              </>,
            ]}
          />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
            I’m always interested in connecting with people building meaningful products, solving interesting engineering challenges, and creating better technology.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="on-dark group flex h-full flex-col justify-between gap-10 rounded-[2.25rem] bg-plum p-7 text-cream sm:p-9">
              <p className="eyebrow flex items-center gap-2 text-cream/75">
                <Mail size={14} aria-hidden="true" /> Email
              </p>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <a href={`mailto:${profile.email}`} className="break-all font-serif text-3xl leading-tight decoration-butter decoration-2 underline-offset-8 hover:underline sm:text-[2.6rem]">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-butter px-5 font-medium text-plum transition-colors hover:bg-pink"
                >
                  {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:col-span-5">
            <Reveal delay={0.08}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[2.25rem] bg-cream p-7 transition-transform duration-500 hover:-rotate-1 sm:p-8"
              >
                <span>
                  <span className="eyebrow flex items-center gap-2 text-plum/75"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                  <span className="mt-3 block font-serif text-3xl">/in/mylenasantos</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
                <ArrowUpRight className="h-10 w-10 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href={profile.resume}
                download
                className="on-dark group flex items-center justify-between rounded-[2.25rem] bg-violet p-7 text-cream transition-transform duration-500 hover:rotate-1 sm:p-8"
              >
                <span>
                  <span className="eyebrow flex items-center gap-2 text-cream/80"><FileDown size={14} aria-hidden="true" /> Resume · PDF</span>
                  <span className="mt-3 block font-serif text-3xl">Download my resume</span>
                </span>
                <FileDown className="h-10 w-10 transition-transform duration-500 group-hover:translate-y-1" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
