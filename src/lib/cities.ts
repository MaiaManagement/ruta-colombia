export interface City {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  region: string;
  heroGradient: string;
  accentColor: string;
}

export const cities: City[] = [
  {
    slug: 'medellin',
    name: 'Medellín',
    tagline: 'The City of Eternal Spring',
    description:
      "Colombia's most innovative city — a thriving hub for expats, digital nomads, and investors in the heart of Antioquia.",
    region: 'Antioquia',
    heroGradient: 'from-violet-900 via-violet-700 to-violet-500',
    accentColor: '#7c3aed',
  },
  {
    slug: 'santa-marta',
    name: 'Santa Marta',
    tagline: "Colombia's Caribbean Gem",
    description:
      'The oldest surviving city in South America — pristine beaches, the Sierra Nevada, and a fast-growing international community.',
    region: 'Magdalena',
    heroGradient: 'from-teal-900 via-teal-700 to-teal-500',
    accentColor: '#0d9488',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
