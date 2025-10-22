import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt-br', 'en', 'es'],
  defaultLocale: 'pt-br',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/',
    '/(pt-br|en|es)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
