export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'hero.cta_primary': 'See my work',
    'hero.cta_secondary': 'Get in touch',
    'experience.present': 'Present',
    'certifications.active': 'Active',
    'certifications.renew': 'Renew by',
    'certifications.in_progress': 'In progress',
    'contact.availability': 'Open to consulting & speaking',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.certifications': 'Certificaciones',
    'nav.contact': 'Contacto',
    'hero.cta_primary': 'Ver mi trabajo',
    'hero.cta_secondary': 'Contacto',
    'experience.present': 'Presente',
    'certifications.active': 'Activa',
    'certifications.renew': 'Renovar antes de',
    'certifications.in_progress': 'En progreso',
    'contact.availability': 'Abierto a consultoría y charlas',
  },
} as const;

export type UiKey = keyof typeof ui['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export const heroContent = {
  en: {
    headline: 'I build teams and AI systems that ship.',
    subheadline: '.NET Tech Lead & AI Builder — 20 years turning complex problems into working software.',
    description:
      'Based in Córdoba, Argentina. Currently leading AI agent platforms at CloudX — building RAG pipelines, MCP integrations, and distributed systems for enterprise clients. Certified Azure Architect, Developer, and Administrator.',
    terminal: [
      { cmd: 'whoami', output: 'adrian majail' },
      { cmd: 'skills --top', output: '.NET · Azure · AI Agents · RAG · MCP · DevOps · Team Leadership' },
      { cmd: 'experience --years', output: '20' },
      {
        cmd: 'status',
        output: 'currently: Dev Team Lead @ CloudX\nbuilding:  Agent Management Platform (RAG + MCP)\nlearning:  AI-200 · AI-103',
      },
    ],
  },
  es: {
    headline: 'Construyo equipos y sistemas de IA que llegan a producción.',
    subheadline:
      '.NET Tech Lead & AI Builder — 20 años convirtiendo problemas complejos en software que funciona.',
    description:
      'Basado en Córdoba, Argentina. Actualmente liderando plataformas de agentes de IA en CloudX — construyendo pipelines RAG, integraciones MCP y sistemas distribuidos para clientes enterprise. Arquitecto, Desarrollador y Administrador certificado en Azure.',
    terminal: [
      { cmd: 'whoami', output: 'adrian majail' },
      { cmd: 'habilidades --top', output: '.NET · Azure · Agentes IA · RAG · MCP · DevOps · Liderazgo técnico' },
      { cmd: 'experiencia --años', output: '20' },
      {
        cmd: 'estado',
        output: 'actualmente: Dev Team Lead @ CloudX\nconstruyendo: Agent Management Platform (RAG + MCP)\naprendiendo:  AI-200 · AI-103',
      },
    ],
  },
} as const;
