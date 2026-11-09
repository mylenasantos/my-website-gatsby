import { MotionConfig } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { Marquee } from './components/Marquee';
import { Nav } from './components/Nav';
import { ScrollProgress } from './components/ScrollProgress';
import { manifesto } from './data/content';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Leadership } from './sections/Leadership';
import { Skills } from './sections/Skills';
import { Work } from './sections/Work';

export default function App() {
  return (
    // reducedMotion="user" makes Framer Motion skip transform animations when the OS asks for it.
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-plum focus:px-5 focus:py-3 focus:text-cream">
          Skip to content
        </a>
        <ScrollProgress />
        <Cursor />
        <Nav />
        <main id="main">
          <Hero />
          <div className="relative z-10 -mb-6 bg-violet text-cream">
            <Marquee items={manifesto} tilt={0} />
          </div>
          <About />
          <Work />
          <div className="relative z-10 bg-butter py-1 text-plum">
            <Marquee items={['React', 'TypeScript', 'Next.js', 'Architecture', 'Leadership', 'Accessibility']} tilt={0} reverse />
          </div>
          <Skills />
          <Leadership />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
