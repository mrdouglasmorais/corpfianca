'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import FormSelect from './Inputs/FormSelect';

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

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
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

  // Convert locales to FormSelect items format
  const selectItems = useMemo(() => {
    return locales.map(loc => ({
      value: loc.code,
      name: loc.name
    }));
  }, []);

  return (
    <div style={{ 
      display: 'inline-block', 
      visibility: 'visible', 
      opacity: 1,
      position: 'relative',
      zIndex: 9999 
    }}>
      <FormSelect
        id="language-switcher"
        name="language-switcher"
        className="nice-select"
        defaultValue={currentLocale}
        items={selectItems}
        value={currentLocale}
        onChange={handleChange}
      />
    </div>
  );
}
