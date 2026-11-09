import { motion } from 'framer-motion';
import { Reveal, SplitLines } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Arch, Sparkle } from '../components/Shapes';
import { leadership } from '../data/content';

const hoverColors = ['#7546E8', '#3157D5'];

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="on-dark relative overflow-hidden rounded-[3rem] bg-plum py-24 text-cream sm:rounded-[5rem] sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(117,70,232,0.45),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(244,91,154,0.25),transparent_65%)]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-28">
            <SectionLabel n="04" label="Leadership" dark />
            <h2 id="leadership-title" className="mt-8 font-serif text-[clamp(2.3rem,3.9vw,3.5rem)] leading-[1.02]">
              <SplitLines
                lines={[
                  'Leadership is not about having',
                  'the loudest voice.',
                  <>
                    It’s about <em className="text-butter">creating space</em>
                  </>,
                  'for others to grow.',
                ]}
              />
            </h2>

            <Reveal delay={0.2} className="relative mt-12 flex items-end gap-5">
              <Arch className="h-28 w-24 shrink-0" color="#F45B9A" />
              <figure>
                <blockquote className="font-serif text-3xl italic leading-tight">“Women belong where decisions are made.”</blockquote>
                <figcaption className="eyebrow mt-3 text-cream/70">— a principle I lead by</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-6">
          {leadership.pillars.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-cream/15 last:border-b"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-x-100"
                style={{ backgroundColor: hoverColors[i % 2] }}
              />
              <div className="relative grid grid-cols-[3rem_1fr] gap-x-4 px-2 py-6 sm:grid-cols-[4rem_1fr_auto] sm:px-5 sm:py-7">
                <span className="font-mono text-sm text-butter transition-colors group-hover:text-cream">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight sm:text-4xl">{p.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-cream/75 transition-colors group-hover:text-cream">{p.body}</p>
                </div>
                <Sparkle className="hidden h-7 w-7 self-center opacity-0 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100 sm:block" color="#FFF8ED" />
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
