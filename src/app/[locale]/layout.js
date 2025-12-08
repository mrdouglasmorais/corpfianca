import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Ensure locale is valid
  const validLocale = ['pt', 'en', 'es'].includes(locale) ? locale : 'pt';
  const messages = await getMessages({ locale: validLocale });

  return (
    <NextIntlClientProvider locale={validLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
