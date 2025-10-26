'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

const locales = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const newLocale = locales.find(l => l.code === selectedValue)?.code;

    if (newLocale && newLocale !== locale) {
      // Extract pathname without locale prefix
      let pathnameWithoutLocale = pathname;
      
      // Remove locale prefix if present
      if (pathname.startsWith('/pt/') || pathname.startsWith('/en/') || pathname.startsWith('/es/')) {
        pathnameWithoutLocale = pathname.replace(/^\/(pt|en|es)/, '') || '/';
      } else if (pathname === '/pt' || pathname === '/en' || pathname === '/es') {
        pathnameWithoutLocale = '/';
      }
      
      // Ensure pathname doesn't start with double slash
      if (pathnameWithoutLocale === '') {
        pathnameWithoutLocale = '/';
      }
      
      // Build new path based on locale
      const newPath = newLocale === 'pt'
        ? pathnameWithoutLocale
        : `/${newLocale}${pathnameWithoutLocale}`;
      
      router.push(newPath);
    }
  }, [locale, pathname, router]);

  // Get current locale - useLocale() should always return a valid locale
  // Default to 'pt' if somehow undefined
  const currentLocale = locale || 'pt';
  
  // Validate that currentLocale is one of our supported locales
  const validLocale = locales.find(l => l.code === currentLocale)?.code || 'pt';

  return (
    <select
      value={validLocale}
      onChange={handleSelectChange}
      style={{
        display: 'inline-block',
        minWidth: '120px',
        padding: '5px 10px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--tj-color-common-white)',
        fontSize: '14px',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {locales.map(loc => (
        <option key={loc.code} value={loc.code}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}
