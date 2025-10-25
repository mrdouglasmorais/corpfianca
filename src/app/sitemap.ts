import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corpfianca.com';
  const locales = ['pt', 'en', 'es'];

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/about', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/services', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/team', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/careers', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/noticias', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/shop', priority: 0.5, changeFreq: 'weekly' as const }
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    routes.forEach(route => {
      const url = locale === 'pt'
        ? `${baseUrl}${route.path}`
        : `${baseUrl}/${locale}${route.path}`;

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority
      });
    });
  });

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
