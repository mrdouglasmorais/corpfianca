'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const locales = [
  { code: 'pt', name: 'PT', flag: '🇧🇷' },
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'es', name: 'ES', flag: '🇪🇸' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  const handleLocaleChange = (newLocale: string) => {
    // Remove current locale from pathname if it exists
    const pathnameWithoutLocale = pathname.replace(/^\/(pt|en|es)/, '') || '/';

    // For default locale (pt), don't add prefix
    const newPath = newLocale === 'pt'
      ? pathnameWithoutLocale
      : `/${newLocale}${pathnameWithoutLocale}`;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher position-relative">
      <button
        className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
        aria-label="Language switcher"
      >
        <span>{currentLocale.flag}</span>
        <span>{currentLocale.name}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="dropdown-menu show position-absolute top-100 end-0 mt-1 shadow-sm border">
          {locales.map((loc) => (
            <button
              key={loc.code}
              className={`dropdown-item d-flex align-items-center gap-2 ${loc.code === locale ? 'active' : ''
                }`}
              onClick={() => handleLocaleChange(loc.code)}
              type="button"
            >
              <span>{loc.flag}</span>
              <span>{loc.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
