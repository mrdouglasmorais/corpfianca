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

  // Detect locale from pathname as fallback if useLocale() doesn't work correctly
  const detectLocaleFromPath = (path: string): string => {
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/es')) return 'es';
    return 'pt'; // Default locale
  };

  // Use locale from hook, but prioritize pathname detection if URL has locale prefix
  const detectedLocale = detectLocaleFromPath(pathname);
  // If pathname starts with a locale prefix, use that; otherwise use hook value
  const effectiveLocale = (pathname.startsWith('/en') || pathname.startsWith('/es')) 
    ? detectedLocale 
    : (locale || detectedLocale);

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const newLocale = locales.find(l => l.code === selectedValue)?.code;

    if (newLocale && newLocale !== effectiveLocale) {
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
  }, [effectiveLocale, pathname, router]);

  // Ensure we have a valid locale - prioritize detected locale from pathname
  const currentLocale = (effectiveLocale && locales.find(l => l.code === effectiveLocale)) 
    ? effectiveLocale 
    : 'pt';

  return (
    <select
      value={currentLocale}
      onChange={handleSelectChange}
      key={currentLocale} // Force re-render when locale changes
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
