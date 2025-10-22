'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
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

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  useEffect(() => {
    // Listen for changes in the FormSelect
    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const selectedValue = target.value;
      const newLocale = locales.find(l => l.code === selectedValue)?.code;

      if (newLocale) {
        // Remove current locale from pathname if it exists
        const pathnameWithoutLocale = pathname.replace(/^\/(pt|en|es)/, '') || '/';

        // For default locale (pt), don't add prefix
        const newPath = newLocale === 'pt'
          ? pathnameWithoutLocale
          : `/${newLocale}${pathnameWithoutLocale}`;

        router.push(newPath);
      }
    };

    const selectElement = document.getElementById('language-switcher');
    if (selectElement) {
      selectElement.addEventListener('change', handleChange);

      return () => {
        selectElement.removeEventListener('change', handleChange);
      };
    }
  }, [pathname, router]);

  return (
    <FormSelect
      id="language-switcher"
      name="language"
      className="nice-select"
      defaultValue={currentLocale.name}
      items={locales.map(loc => ({ value: loc.code, name: loc.name }))}
    />
  );
}
