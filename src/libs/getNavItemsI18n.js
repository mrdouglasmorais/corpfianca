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
          name: t('business_process_optimization'),
          icon: 'tji-optimization',
          path: createLocalizedPath('/services/1', locale),
        },
        {
          id: 2,
          name: t('strategic_planning_execution'),
          icon: 'tji-strategic',
          path: createLocalizedPath('/services/2', locale),
        },
        {
          id: 3,
          name: t('leadership_executive_coaching'),
          icon: 'tji-leadership',
          path: createLocalizedPath('/services/3', locale),
        },
        {
          id: 4,
          name: t('legacy_leadership_institute'),
          icon: 'tji-business',
          path: createLocalizedPath('/services/4', locale),
        },
        {
          id: 5,
          name: t('executive_growth_solutions'),
          icon: 'tji-executive',
          path: createLocalizedPath('/services/5', locale),
        },
        {
          id: 6,
          name: t('empowered_leadership_journey'),
          icon: 'tji-process',
          path: createLocalizedPath('/services/1', locale),
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
