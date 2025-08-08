export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  author?: string;
  content: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizar-seo-web-2025",
    title: "Cómo optimizar el SEO de tu web en 2025",
    excerpt: "Guía práctica con acciones concretas para mejorar tu posicionamiento orgánico.",
    date: "2025-08-01",
    author: "Trazo.digital",
    content: [
      "El SEO en 2025 se centra en la intención de búsqueda, la velocidad de carga y la experiencia de usuario.",
      "Empieza con una auditoría técnica: estructura de URLs, metadatos, sitemaps y tiempos de carga.",
      "Crea contenido que resuelva problemas reales; usa encabezados claros, datos y llamadas a la acción útiles.",
    ],
  },
  {
    slug: "tendencias-diseno-web",
    title: "Tendencias de diseño web: lo que funciona",
    excerpt: "Principios de diseño modernos que mejoran la conversión y la experiencia de usuario.",
    date: "2025-07-25",
    author: "Trazo.digital",
    content: [
      "Diseños minimalistas con tipografías grandes y contrastes accesibles dominan la escena.",
      "Microinteracciones y animaciones sutiles mejoran la percepción de calidad sin distraer.",
      "Prioriza la legibilidad, el rendimiento y la consistencia visual de tu marca.",
    ],
  },
  {
    slug: "automatizaciones-ahorran-tiempo",
    title: "Automatizaciones que ahorran horas cada semana",
    excerpt: "Ejemplos reales de automatización con impacto directo en el negocio.",
    date: "2025-07-18",
    author: "Trazo.digital",
    content: [
      "Automatiza capturas de leads, envíos de emails y publicación en RRSS para liberar tiempo.",
      "Conecta tus herramientas con Zapier o Make y mide el impacto de cada flujo.",
      "Empieza pequeño, documenta y escala lo que funcione.",
    ],
  },
];
