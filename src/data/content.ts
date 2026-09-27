import { FaqItem, PortfolioProject, PricingPlan, ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website',
    title: 'Website Development',
    description: 'Modern, responsive websites designed to represent your business professionally and convert visitors into customers.',
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Custom animations',
      'Contact & WhatsApp integration',
      'Deployment support',
    ],
    ctaText: 'Explore Websites',
    badge: 'Web Architecture',
  },
  {
    id: 'discord',
    title: 'Discord Bot Development',
    description: 'Custom Discord bots designed to automate your community and provide the exact features your server needs.',
    features: [
      'Ticket systems',
      'Verification',
      'Moderation',
      'Logging',
      'Custom commands',
      'Database integration',
    ],
    ctaText: 'Build a Discord Bot',
    badge: 'Server Infrastructure',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Connect your tools, remove repetitive work, and create smarter workflows.',
    features: [
      'API integrations',
      'Automated workflows',
      'Notifications',
      'Data processing',
      'Custom integrations',
    ],
    ctaText: 'Automate a Process',
    badge: 'Process Engineering',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Keep your website or bot reliable, updated, and ready for your users.',
    features: [
      'Bug fixes',
      'Updates',
      'Monitoring',
      'Content changes',
      'Technical support',
    ],
    ctaText: 'Get Support',
    badge: 'Reliability & Uptime',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We understand your goals, requirements, audience, and technical needs.',
    tag: 'Scoping & Alignment',
  },
  {
    step: '02',
    title: 'DESIGN',
    description: 'We turn your idea into a clean, modern digital experience.',
    tag: 'Architecture & UX',
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'We develop, test, optimize, and refine the final product.',
    tag: 'Engineering & QA',
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'We deploy your project and provide the support you need after launch.',
    tag: 'Deployment & Support',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aurelia-atelier',
    name: 'Aurelia Atelier',
    category: 'Web Development',
    description:
      'Luxury interior architecture website focused on visual presentation, premium branding, and responsive design.',
    techStack: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Layouts',
    ],
    accentColor: '#3b82f6',
    previewType: 'architectural',
    projectStatus: 'Live',
    liveUrl:
      'https://aurelia-atelier-luxury-interior-architecture.ai.studio/',
  },

  {
    id: 'discord-ticket-system',
    name: 'Kakarot Ticket System',
    category: 'Discord Development',
    description:
      'A production-ready Discord ticket management system built for organized community support, staff workflows, transcripts, and ticket activity logging.',
    features: [
      'Ticket creation',
      'Category selection',
      'Staff controls',
      'Ticket claiming',
      'HTML transcripts',
      'Activity logging',
      'Close and delete workflow',
      'Persistent ticket records',
    ],
    techStack: [
      'Node.js',
      'Discord.js v14',
      'JSON Storage',
      'HTML Transcripts',
    ],
    accentColor: '#60a5fa',
    previewType: 'ticket-system',
    projectStatus: 'Demo',
  },

  {
    id: 'discord-verification-system',
    name: 'Discord Verification System',
    category: 'Discord Development',
    description:
      'A custom Discord verification system designed to provide controlled server access and a clean onboarding experience.',
    features: [
      'Verification button',
      'Role assignment',
      'Verification logging',
      'Custom embeds',
      'Secure member onboarding',
    ],
    techStack: [
      'Discord.js v14',
      'Discord API',
      'Role Management',
      'Audit Logging',
    ],
    accentColor: '#2563eb',
    previewType: 'verification',
    projectStatus: 'Coming Soon',
  },

  {
    id: 'custom-business-platform',
    name: 'Custom Business Platform',
    category: 'Web Development',
    description:
      'A concept business platform demonstrating how Kakarot Development can combine modern UI, responsive design, APIs, analytics, and lead-generation workflows.',
    techStack: [
      'TypeScript',
      'Tailwind CSS',
      'REST API',
      'Analytics',
      'Lead Capture',
    ],
    accentColor: '#38bdf8',
    previewType: 'business-platform',
    projectStatus: 'Concept',
  },
];
export const WHY_US_BENEFITS = [
  {
    number: '01',
    title: 'BUILT AROUND YOU',
    description: "Every project is developed around the client's actual requirements.",
  },
  {
    number: '02',
    title: 'MODERN BY DESIGN',
    description: 'Clean interfaces, responsive layouts, and modern development practices.',
  },
  {
    number: '03',
    title: 'NO UNNECESSARY COMPLEXITY',
    description: 'We focus on useful features instead of adding technology just for the sake of it.',
  },
  {
    number: '04',
    title: 'LONG-TERM SUPPORT',
    description: 'The relationship does not have to end when the project launches.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'website-starter',
    title: 'WEBSITE STARTER',
    priceStartingAt: '$100',
    popular: false,
    features: [
      '1–3 pages',
      'Responsive design',
      'Modern UI',
      'Contact section',
      'Basic animations',
      'Deployment assistance',
    ],
    ctaText: 'Start a Website',
    defaultProjectType: 'Website',
    defaultBudget: '$100–$250',
  },
  {
    id: 'website-business',
    title: 'WEBSITE BUSINESS',
    priceStartingAt: '$250',
    popular: true,
    features: [
      '4–7 pages',
      'Custom UI/UX',
      'Responsive design',
      'Animations',
      'Contact / WhatsApp integration',
      'Basic SEO',
      'Deployment assistance',
    ],
    ctaText: 'Choose Business',
    defaultProjectType: 'Website',
    defaultBudget: '$250–$500',
  },
  {
    id: 'custom-development',
    title: 'CUSTOM DEVELOPMENT',
    priceStartingAt: '$100+',
    popular: false,
    features: [
      'Custom requirements',
      'Advanced functionality',
      'APIs',
      'Databases',
      'Integrations',
      'Custom automation',
    ],
    ctaText: 'Request a Quote',
    defaultProjectType: 'Automation',
    defaultBudget: '$100–$250',
  },
  {
    id: 'discord-bot',
    title: 'DISCORD BOT',
    priceStartingAt: '$75',
    popular: false,
    features: [
      'Custom commands',
      'Embeds',
      'Moderation',
      'Verification',
      'Tickets',
      'Logging',
    ],
    ctaText: 'Build My Bot',
    defaultProjectType: 'Discord Bot',
    defaultBudget: 'Under $100',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How does a project start?',
    answer: "Send us your requirements through the contact form and we'll review the project before discussing scope and pricing.",
  },
  {
    question: 'How long does a website take?',
    answer: 'Timeline depends on the number of pages, design complexity, content, and functionality required.',
  },
  {
    question: 'Can you build custom Discord bots?',
    answer: 'Yes. Bots can include tickets, verification, moderation, logging, custom commands, databases, APIs, and other custom functionality.',
  },
  {
    question: 'Can you work with an existing website or bot?',
    answer: 'Yes. Existing projects can be updated, redesigned, fixed, or expanded depending on the project.',
  },
  {
    question: 'Do you provide maintenance?',
    answer: 'Yes. Ongoing maintenance and technical support can be arranged after launch.',
  },
];
