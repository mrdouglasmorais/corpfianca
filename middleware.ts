import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt-br', 'en', 'es'],
  defaultLocale: 'pt-br',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.svg$|.*\\.ico$).*)'
  ]
};
