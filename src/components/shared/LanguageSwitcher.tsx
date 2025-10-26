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

  // Stabilize items array to prevent unnecessary re-renders
  const items = useMemo(
    () => locales.map(loc => ({ value: loc.code, name: loc.name })),
    []
  );

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const newLocale = locales.find(l => l.code === selectedValue)?.code;

    if (newLocale && newLocale !== locale) {
      // Remove current locale from pathname if it exists
      const pathnameWithoutLocale = pathname.replace(/^\/(pt|en|es)/, '') || '/';

      // For default locale (pt), don't add prefix
      const newPath = newLocale === 'pt'
        ? pathnameWithoutLocale
        : `/${newLocale}${pathnameWithoutLocale}`;

      router.push(newPath);
    }
  }, [locale, pathname, router]);

  return (
    <div style={{ display: 'inline-block', minWidth: '120px', position: 'relative', zIndex: 9999 }}>
      <FormSelect
        id="language-switcher"
        name="language"
        className="nice-select"
        defaultValue=""
        value={locale}
        onChange={handleSelectChange}
        items={items}
      />
      <style jsx>{`
        #language-switcher {
          display: none !important;
        }
        #language-switcher + .nice-select {
          display: inline-flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
