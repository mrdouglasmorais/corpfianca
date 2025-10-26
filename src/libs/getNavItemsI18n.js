import { createLocalizedPath } from '@/utils/pathUtils';

const getNavItemsI18n = (t, locale) => {
  return [
    {
      id: 1,
      name: t('home'),
      path: createLocalizedPath('/', locale),
    },
    {
      id: 2,
      name: t('pages'),
      path: '#',
      submenu: [
        {
          id: 1,
          name: '',
          path: '#',
          items: [
            {
              id: 1,
              name: t('about_us'),
              path: createLocalizedPath('/about', locale),
              badge: null,
            },
            {
              id: 2,
              name: t('services'),
              path: createLocalizedPath('/services', locale),
              badge: null,
            },
            {
              id: 3,
              name: t('faq'),
              path: createLocalizedPath('/faq', locale),
              badge: null,
            },
            {
              id: 4,
              name: t('register'),
              path: createLocalizedPath('/register', locale),
              badge: 'New',
            },
            {
              id: 5,
              name: t('login'),
              path: createLocalizedPath('/login', locale),
              badge: null,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: t('services'),
      path: createLocalizedPath('/services', locale),
      submenu: [
        {
          id: 1,
          name: t('traditional_bonds'),
          icon: 'tji-optimization',
          path: createLocalizedPath('/services/1', locale),
        },
        {
          id: 2,
          name: t('corporate_bonds'),
          icon: 'tji-strategic',
          path: createLocalizedPath('/services/2', locale),
        },
        {
          id: 3,
          name: t('structured_bonds'),
          icon: 'tji-leadership',
          path: createLocalizedPath('/services/3', locale),
        },
        {
          id: 4,
          name: t('judicial_bonds'),
          icon: 'tji-business',
          path: createLocalizedPath('/services/4', locale),
        },
        {
          id: 5,
          name: t('credit_bonds'),
          icon: 'tji-executive',
          path: createLocalizedPath('/services/5', locale),
        },
        {
          id: 6,
          name: t('rental_bonds'),
          icon: 'tji-process',
          path: createLocalizedPath('/services/6', locale),
        },
      ],
    },
    {
      id: 5,
      name: t('blog'),
      path: createLocalizedPath('/noticias', locale),
    },
    {
      id: 6,
      name: t('contact'),
      path: createLocalizedPath('/contact', locale),
    },
  ];
};

export default getNavItemsI18n;
