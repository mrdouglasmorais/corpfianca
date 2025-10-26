'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

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
      const pathnameWithoutLocale = pathname.replace(/^\/(pt|en|es)/, '') || '/';
      const newPath = newLocale === 'pt'
        ? pathnameWithoutLocale
        : `/${newLocale}${pathnameWithoutLocale}`;
      router.push(newPath);
    }
  }, [locale, pathname, router]);

  return (
    <select
      value={locale}
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
