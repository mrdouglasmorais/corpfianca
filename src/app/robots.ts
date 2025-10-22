import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corpfianca.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/admin/',
          '/private/',
          '/temp/',
          '*.pdf',
          '/checkout',
          '/cart',
          '/login',
          '/password',
          '/test*',
          '/error'
        ],
      },
      // Regras específicas para bots de busca
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/checkout',
          '/cart',
          '/login',
          '/password',
          '/test*',
          '/error'
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/checkout',
          '/cart',
          '/login',
          '/password',
          '/test*',
          '/error'
        ],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
