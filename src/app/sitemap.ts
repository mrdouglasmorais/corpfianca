import { MetadataRoute } from 'next';
import blogs from '../../public/fakedata/blogs.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corpfianca.com';

  // Translated routes for each locale
  const routeTranslations = {
    pt: {
      home: '',
      about: '/sobre',
      products: '/produtos',
      contact: '/contato',
      blog: '/noticias',
      faq: '/perguntas-frequentes',
      login: '/entrar',
      register: '/cadastrar',
      password: '/senha',
      quote: '/cotacao',
      claims: '/sinistros',
      privacy: '/privacy-policy',
      terms: '/termos-e-condicoes',
    },
    en: {
      home: '',
      about: '/about',
      products: '/products',
      contact: '/contact',
      blog: '/noticias',
      faq: '/faq',
      login: '/login',
      register: '/register',
      password: '/password',
      quote: '/quote',
      claims: '/claims',
      privacy: '/privacy-policy',
      terms: '/termos-e-condicoes',
    },
    es: {
      home: '',
      about: '/acerca',
      products: '/productos',
      contact: '/contacto',
      blog: '/noticias',
      faq: '/preguntas-frecuentes',
      login: '/iniciar-sesion',
      register: '/registrarse',
      password: '/contrasena',
      quote: '/cotizacion',
      claims: '/siniestros',
      privacy: '/privacy-policy',
      terms: '/termos-e-condicoes',
    },
  };

  const routes = [
    { key: 'home', priority: 1.0, changeFreq: 'daily' as const },
    { key: 'about', priority: 0.9, changeFreq: 'weekly' as const },
    { key: 'products', priority: 0.9, changeFreq: 'weekly' as const },
    { key: 'contact', priority: 0.8, changeFreq: 'weekly' as const },
    { key: 'blog', priority: 0.7, changeFreq: 'weekly' as const },
    { key: 'faq', priority: 0.6, changeFreq: 'monthly' as const },
    { key: 'login', priority: 0.5, changeFreq: 'monthly' as const },
    { key: 'register', priority: 0.5, changeFreq: 'monthly' as const },
    { key: 'quote', priority: 0.6, changeFreq: 'weekly' as const },
    { key: 'claims', priority: 0.6, changeFreq: 'weekly' as const },
    { key: 'password', priority: 0.4, changeFreq: 'monthly' as const },
    { key: 'privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { key: 'terms', priority: 0.3, changeFreq: 'yearly' as const },
  ];

  const sitemap: MetadataRoute.Sitemap = [];
  const locales = Object.keys(routeTranslations);

  // Generate URLs for each locale
  Object.entries(routeTranslations).forEach(([locale, localeRoutes]) => {
    const localePrefix = locale === 'pt' ? '' : `/${locale}`;

    routes.forEach(route => {
      const path = localeRoutes[route.key as keyof typeof localeRoutes];
      if (path !== undefined) {
        sitemap.push({
          url: `${baseUrl}${localePrefix}${path}`,
          lastModified: new Date(),
          changeFrequency: route.changeFreq,
          priority: route.priority
        });
      }
    });
  });

  // Add blog detail pages for each locale
  blogs.forEach((blog) => {
    const slug = blog.slug || `${blog.id}`;
    const lastModified = blog.dateReleased ? new Date(blog.dateReleased) : new Date();
    locales.forEach((locale) => {
      const localePrefix = locale === 'pt' ? '' : `/${locale}`;
      sitemap.push({
        url: `${baseUrl}${localePrefix}/noticias/${slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    });
  });

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
