import type { LucideIcon } from 'lucide-react';
import { Globe, Share2, Search, Workflow } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  description: string;
  pricing: { type: string; price: string }[];
  features: string[]; // Incluye
  excludes: string[]; // No incluye
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: 'diseno-desarrollo-web',
    title: 'Diseño y Desarrollo Web',
    description:
      'Creamos páginas web modernas, responsivas y optimizadas para convertir visitantes en clientes.',
    pricing: [
      { type: 'Web básica', price: 'desde 250 €' },
      { type: 'Web profesional', price: 'desde 650 €' },
      { type: 'Web con tienda online', price: 'desde 990 €' },
    ],
    features: ['Diseño responsive', 'Optimización SEO básica', 'Panel de administración', 'Hosting incluido', 'Redacción de contenidos avanzada', 'Fotografía y material audiovisual'],
    excludes: [
      'Publicidad o gestión de campañas',
    ],
    icon: Globe,
  },
  {
    slug: 'gestion-redes-sociales',
    title: 'Gestión Integral de RRSS',
    description:
      'Gestionamos todas tus redes sociales con contenido estratégico que conecta con tu audiencia.',
    pricing: [
      { type: 'Plan básico', price: 'desde 195 €/mes' },
      { type: 'Plan avanzado', price: 'desde 395 €/mes' },
      { type: 'Plan premium', price: 'desde 595 €/mes' },
    ],
    features: ['Contenido personalizado', 'Programación de posts', 'Análisis de métricas', 'Gestión de comunidad'],
    excludes: ['Inversión en publicidad (Ads no incluidos)', 'Gestión de crisis 24/7', 'Atención al cliente'],
    icon: Share2,
  },
  {
    slug: 'optimizacion-seo',
    title: 'Optimización SEO',
    description:
      'Mejoramos el posicionamiento de tu web en Google para que te encuentren más clientes potenciales.',
    pricing: [
      { type: 'Auditoría inicial', price: 'gratuita' },
      { type: 'Plan SEO básico', price: 'desde 290 €/mes' },
      { type: 'Plan SEO avanzado', price: 'desde 590 €/mes' },
    ],
    features: ['Análisis de palabras clave', 'Optimización técnica', 'Link building', 'Informes mensuales'],
    excludes: ['Creación masiva de contenido', 'Garantía de posiciones exactas', 'Ads o SEM (servicio separado)'],
    icon: Search,
  },
  {
    slug: 'automatizacion-procesos',
    title: 'Automatización de Procesos',
    description:
      'Implementamos automatizaciones para ahorrar tiempo y reducir errores en tareas repetitivas.',
    pricing: [
      { type: 'Setup inicial', price: 'desde 350 €' },
      { type: 'Mantenimiento básico', price: 'desde 150 €/mes' },
      { type: 'Plan avanzado', price: 'desde 390 €/mes' },
    ],
    features: [
      'Integración de herramientas (Zapier, Make)',
      'Automatización de funnels y leads',
      'Bots y flujos para RRSS y WhatsApp',
      'Monitorización y reporting',
    ],
    excludes: ['Licencias de herramientas de terceros', 'Soporte on-site', 'Desarrollo a medida fuera del alcance'],
    icon: Workflow,
  },
];
