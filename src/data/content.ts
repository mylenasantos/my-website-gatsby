/**
 * Single source of truth for all portfolio copy.
 * Edit text here — components only render what they receive.
 *
 * NOTE: Case-study and role descriptions are written from the brief.
 * Review every line so it matches what you actually did.
 */

export type Accent = 'violet' | 'pink' | 'coral' | 'butter' | 'cobalt' | 'plum';

export const profile = {
  name: 'Mylena Santos',
  title: 'Senior Frontend Engineer & Technical Lead',
  email: 'myleena.santos@icloud.com',
  linkedin: 'https://www.linkedin.com/in/mylenasantos',
  resume: '/Mylena-Santos-Resume.pdf',
  /** Drop a real photo into /public and set the path, e.g. '/mylena.jpg'. Leave null for the typographic portrait. */
  portrait: null as string | null,
  intro:
    '10 years transforming ideas into digital products, modernizing frontend architectures, and building engineering teams that deliver meaningful results.',
  keywords: ['React', 'TypeScript', 'Next.js', 'Architecture', 'Leadership', 'Accessibility'],
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export const manifesto = [
  'Building the web',
  'Breaking expectations',
  'Leading with purpose',
  'Engineering has no gender',
  'Breaking patterns, building possibilities',
];

export const about = {
  lead: 'With 10 years in software engineering and over 5 years in technical leadership, I work at the intersection of frontend engineering, architecture, people development, and product thinking.',
  abilities: [
    { title: 'Sophisticated frontends', body: 'Complex, componentized React and Next.js applications that stay fast and pleasant to work in as they grow.', icon: 'Layers' },
    { title: 'Legacy modernization', body: 'Moving aging codebases to modern foundations incrementally — without stopping product delivery.', icon: 'RefreshCcw' },
    { title: 'Architecture decisions', body: 'Choosing trade-offs deliberately, writing them down, and making them understandable for the whole team.', icon: 'Compass' },
    { title: 'Performance & accessibility', body: 'Treating speed and inclusive design as product requirements, measured — not afterthoughts.', icon: 'Gauge' },
    { title: 'Mentoring engineers', body: 'Individual development plans, honest feedback and stretch opportunities that help people level up.', icon: 'Sprout' },
    { title: 'Autonomous teams', body: 'Clear standards and context so teams can make good decisions without waiting for permission.', icon: 'Users' },
    { title: 'Tech ↔ business', body: 'Connecting technical decisions to business objectives, and translating between both languages.', icon: 'Waypoints' },
  ],
};

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  accent: Accent;
  diagram: 'migration' | 'marketplace' | 'accessibility' | 'process' | 'microservice';
  challenge: string;
  /** What Mylena personally did. */
  mine: string[];
  /** What the team achieved together. */
  team: string[];
  decisions: string[];
  stack: string[];
  impact: string;
  highlight?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'modernization',
    index: '01',
    title: 'Frontend Platform Modernization',
    kicker: 'Architecture · Migration',
    summary: 'Moving a Create React App platform to Next.js — a new foundation without freezing the roadmap.',
    accent: 'violet',
    diagram: 'migration',
    challenge:
      'The platform ran on Create React App, a toolchain that is no longer actively maintained, with everything rendered on the client. That limited first-load performance and SEO and made the architecture harder to evolve.',
    mine: [
      'Defined the migration strategy and the target Next.js architecture.',
      'Made the call on rendering strategy, routing and project conventions.',
      'Reviewed the critical changes and coached engineers through the new patterns.',
    ],
    team: [
      'Migrated the platform to Next.js while continuing to ship product work.',
      'Adopted shared conventions that made the codebase consistent again.',
    ],
    decisions: [
      'Incremental migration over a big-bang rewrite',
      'Rendering strategy chosen per route (SSR, SSG or CSR)',
      'Strict TypeScript and shared lint rules as the baseline',
    ],
    stack: ['Next.js', 'React', 'TypeScript'],
    impact: 'A modern, maintained foundation with server rendering where it matters, and a codebase that is easier to evolve.',
    highlight: 'CRA → Next.js',
  },
  {
    id: 'marketplace',
    index: '02',
    title: 'Incentivar Marketplace Rebuild',
    kicker: 'Product · Next.js',
    summary: 'Rebuilding the marketplace experience on Next.js with a component architecture designed to scale.',
    accent: 'cobalt',
    diagram: 'marketplace',
    challenge:
      'The marketplace needed a rebuild that could support new product requirements, perform well for users, and remain maintainable as more engineers contributed to it.',
    mine: [
      'Led the technical direction of the rebuild as Tech Lead.',
      'Designed the component and data-fetching architecture.',
      'Aligned scope and trade-offs with product and stakeholders.',
    ],
    team: [
      'Delivered the rebuilt marketplace on Next.js.',
      'Built a reusable component base for future features.',
    ],
    decisions: [
      'Next.js for routing, rendering flexibility and SEO',
      'Reusable, typed component library as the building block',
      'Performance budgets considered from the first sprint',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Material UI'],
    impact: 'A marketplace foundation the team could keep extending with confidence.',
  },
  {
    id: 'accessibility',
    index: '03',
    title: 'Coca-Cola FEMSA Accessibility Initiative',
    kicker: 'Quality · Accessibility',
    summary: 'Making accessibility measurable — and getting the Lighthouse accessibility score above 90.',
    accent: 'butter',
    diagram: 'accessibility',
    challenge:
      'Accessibility issues were spread across the interface and there was no shared way to measure or prevent them, which meant real barriers for users.',
    mine: [
      'Drove the initiative and defined the accessibility criteria.',
      'Used Google Lighthouse as the shared, measurable baseline.',
      'Guided engineers on semantics, contrast, labels and keyboard support.',
    ],
    team: [
      'Fixed the issues across the interface.',
      'Raised the Lighthouse accessibility score above 90.',
    ],
    decisions: [
      'Measure first: Lighthouse as the objective baseline',
      'Fix at the component level so fixes propagate',
      'Accessibility checks as part of the definition of done',
    ],
    stack: ['React', 'Google Lighthouse', 'WCAG', 'Semantic HTML'],
    impact: 'Lighthouse accessibility score above 90 — and accessibility treated as a quality standard, not a one-off task.',
    highlight: '90+',
  },
  {
    id: 'processes',
    index: '04',
    title: 'Engineering Processes & Technical Documentation',
    kicker: 'Leadership · Standards',
    summary: 'Turning tribal knowledge into documented standards that help teams move on their own.',
    accent: 'pink',
    diagram: 'process',
    challenge:
      'Knowledge lived in people’s heads. Onboarding was slow, decisions were re-discussed, and quality depended on who reviewed the code.',
    mine: [
      'Created the engineering standards and documentation structure.',
      'Defined code review guidelines and development workflows.',
      'Encouraged writing decisions down so they could be revisited.',
    ],
    team: [
      'Adopted the standards in day-to-day work.',
      'Kept documentation alive as part of delivery.',
    ],
    decisions: [
      'Documentation lives close to the code',
      'Lightweight written decision records for architecture',
      'Clear review checklists instead of implicit expectations',
    ],
    stack: ['Engineering Standards', 'Code Review', 'Scrum'],
    impact: 'More consistent delivery, smoother onboarding and teams able to act with more autonomy.',
  },
  {
    id: 'recovery',
    index: '05',
    title: 'Account Recovery Microservice',
    kicker: 'Backend · Serverless',
    summary: 'A focused, serverless service for secure account recovery.',
    accent: 'plum',
    diagram: 'microservice',
    challenge:
      'Account recovery is security-sensitive and needed to be isolated from the main application, reliable, and simple to operate.',
    mine: [
      'Worked on the design and implementation of the service.',
      'Modelled the persistence layer with TypeORM.',
      'Shaped the service for deployment on AWS Lambda.',
    ],
    team: ['Shipped an isolated recovery service integrated into the product.'],
    decisions: [
      'Single-responsibility microservice',
      'NestJS modules for structure and testability',
      'Serverless deployment on AWS Lambda',
    ],
    stack: ['NestJS', 'TypeORM', 'AWS Lambda', 'Node.js', 'TypeScript'],
    impact: 'Recovery flow isolated from the core application, with a small, testable codebase.',
  },
];

export interface SkillCluster {
  id: string;
  label: string;
  accent: Accent;
  blurb: string;
  items: string[];
}

export const skillClusters: SkillCluster[] = [
  { id: 'frontend', label: 'Frontend', accent: 'violet', blurb: 'Where I go deepest.', items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Gatsby.js', 'Material UI'] },
  { id: 'backend', label: 'Backend', accent: 'cobalt', blurb: 'Enough depth to design across the stack.', items: ['Node.js', 'NestJS', 'Microservices', 'REST APIs', 'SOAP', 'AWS Lambda', 'TypeORM'] },
  { id: 'quality', label: 'Quality', accent: 'butter', blurb: 'Non-negotiable.', items: ['Accessibility', 'Google Lighthouse', 'Unit Testing', 'Performance', 'Engineering Standards'] },
  { id: 'leadership', label: 'Leadership', accent: 'pink', blurb: 'People first, then process.', items: ['Technical Strategy', 'Mentoring', 'People Management', 'Roadmaps', 'Stakeholder Management', 'Scrum'] },
  { id: 'ai', label: 'AI-assisted Development', accent: 'coral', blurb: 'Leverage, with judgment.', items: ['Claude', 'AI-assisted coding', 'Development Automation'] },
];

/** How skills connect to each other — powers the hover highlights. */
export const skillLinks: Record<string, string[]> = {
  React: ['Next.js', 'React Native', 'TypeScript', 'Gatsby.js', 'Material UI', 'Accessibility', 'Unit Testing'],
  'React Native': ['React', 'TypeScript'],
  'Next.js': ['React', 'Performance', 'Google Lighthouse', 'TypeScript', 'Node.js'],
  TypeScript: ['React', 'Next.js', 'NestJS', 'Node.js', 'TypeORM', 'JavaScript'],
  JavaScript: ['TypeScript', 'Node.js', 'React'],
  'Gatsby.js': ['React', 'Performance'],
  'Material UI': ['React', 'Accessibility'],
  'Node.js': ['NestJS', 'AWS Lambda', 'TypeScript', 'REST APIs'],
  NestJS: ['Node.js', 'TypeORM', 'Microservices', 'TypeScript'],
  Microservices: ['NestJS', 'AWS Lambda', 'REST APIs', 'Technical Strategy'],
  'REST APIs': ['Node.js', 'Microservices', 'SOAP'],
  SOAP: ['REST APIs'],
  'AWS Lambda': ['Microservices', 'Node.js', 'NestJS'],
  TypeORM: ['NestJS', 'TypeScript'],
  Accessibility: ['Google Lighthouse', 'React', 'Material UI', 'Engineering Standards'],
  'Google Lighthouse': ['Accessibility', 'Performance', 'Next.js'],
  'Unit Testing': ['Engineering Standards', 'React', 'Development Automation'],
  Performance: ['Google Lighthouse', 'Next.js', 'Gatsby.js'],
  'Engineering Standards': ['Unit Testing', 'Accessibility', 'Mentoring', 'Technical Strategy'],
  'Technical Strategy': ['Roadmaps', 'Stakeholder Management', 'Microservices', 'Engineering Standards'],
  Mentoring: ['People Management', 'Engineering Standards'],
  'People Management': ['Mentoring', 'Scrum'],
  Roadmaps: ['Technical Strategy', 'Stakeholder Management', 'Scrum'],
  'Stakeholder Management': ['Roadmaps', 'Technical Strategy'],
  Scrum: ['Roadmaps', 'People Management'],
  Claude: ['AI-assisted coding', 'Development Automation'],
  'AI-assisted coding': ['Claude', 'TypeScript', 'Development Automation'],
  'Development Automation': ['Claude', 'Unit Testing', 'AI-assisted coding'],
};

export const leadership = {
  pillars: [
    { title: 'People management', body: 'Owning the growth, wellbeing and performance of the people on my team.' },
    { title: 'Mentoring & IDPs', body: 'Individual development plans that turn ambitions into concrete next steps.' },
    { title: 'One-on-ones', body: 'Recurring, protected time for honest conversations — the heartbeat of trust.' },
    { title: 'Technical strategy', body: 'Deciding what to build on, what to retire, and why — in writing.' },
    { title: 'Engineering roadmaps', body: 'Balancing product goals with the technical investments that keep us fast.' },
    { title: 'Cross-functional collaboration', body: 'Working with product, design and business as partners, not hand-offs.' },
    { title: 'Quality & delivery', body: 'Shipping predictably without trading away quality, accessibility or performance.' },
    { title: 'Team autonomy', body: 'Context over control: teams that can decide well without me in the room.' },
  ],
};

export interface Role {
  company: string;
  role: string;
  period: string | null;
  accent: Accent;
  points: string[];
}

export const experience: Role[] = [
  {
    company: 'Incentivar',
    role: 'Tech Coordinator / Tech Lead',
    period: 'Apr 2020 — Present',
    accent: 'violet',
    points: [
      'Lead engineers through people management, mentoring, IDPs and one-on-ones.',
      'Own technical strategy and roadmap, including the move from Create React App to Next.js.',
      'Drive engineering standards, documentation and quality practices.',
    ],
  },
  {
    company: 'Incentivar',
    role: 'Frontend Software Engineer',
    period: 'May 2019 — Apr 2020',
    accent: 'pink',
    points: ['Built and evolved React frontends for the product.'],
  },
  {
    company: 'Xplor Business Solutions',
    role: 'Mid-Level Software Developer',
    period: 'Sep 2017 — May 2019',
    accent: 'cobalt',
    points: ['Developed web applications and integrations, including REST and SOAP services.'],
  },
  {
    company: 'Xplor Business Solutions',
    role: 'Junior Software Developer',
    // Dates intentionally omitted until verified — add them here, e.g. 'Aug 2017 — Sep 2017'.
    period: null,
    accent: 'coral',
    points: ['Started building production software as part of the development team.'],
  },
  {
    company: 'FATEC',
    role: 'Software Development Intern',
    period: 'Mar 2016 — Jul 2017',
    accent: 'butter',
    points: ['First steps in professional software development.'],
  },
];

export const education = [
  { school: 'FATEC', course: 'Systems Analysis and Development', accent: 'violet' as Accent },
  { school: 'CTMA', course: 'Information Technology', accent: 'cobalt' as Accent },
  { school: 'FORJA', course: 'Technology Leadership Development Program', accent: 'pink' as Accent },
];
