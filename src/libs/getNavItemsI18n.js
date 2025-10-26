import getALlServices from '@/libs/getALlServices';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';

const getNavItemsI18n = (t, locale) => {
  const services = getALlServices();
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
      submenu: services.slice(0, 6).map((service, idx) => {
        const translationKeys = [
          'traditional_bonds',
          'corporate_bonds',
          'structured_bonds',
          'judicial_bonds',
          'credit_bonds',
          'rental_bonds',
        ];
        return {
          id: idx + 1,
          name: t(translationKeys[idx]),
          icon: service.iconName || 'tji-optimization',
          path: createLocalizedPath(`/services/${getServiceSlug(service)}`, locale),
        };
      }),
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
