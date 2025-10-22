import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale against supported locales
  const supportedLocales = ['pt', 'en', 'es'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'pt';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
