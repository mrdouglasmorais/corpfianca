/**
 * Route translations mapping
 */
const routeTranslations = {
  pt: {
    '/contact': '/contato',
    '/about': '/sobre',
    '/services': '/servicos',
    '/login': '/entrar',
    '/password': '/senha',
    '/register': '/cadastrar',
    '/faq': '/perguntas-frequentes',
  },
  en: {
    '/contact': '/contact',
    '/about': '/about',
    '/services': '/services',
    '/login': '/login',
    '/password': '/password',
    '/register': '/register',
    '/faq': '/faq',
  },
  es: {
    '/contact': '/contacto',
    '/about': '/acerca',
    '/services': '/servicios',
    '/login': '/iniciar-sesion',
    '/password': '/contrasena',
    '/register': '/registrarse',
    '/faq': '/preguntas-frecuentes',
  },
};

/**
 * Get translated route for a given path and locale
 * @param {string} path - The path to translate
 * @param {string} locale - The current locale
 * @returns {string} - The translated path
 */
const getTranslatedRoute = (path, locale) => {
  const translations = routeTranslations[locale] || routeTranslations.en;

  // Handle root path
  if (path === '/') return '/';

  // Split path into segments
  const pathSegments = path.split('/').filter(Boolean);

  // Translate the first segment (base route)
  const baseSegment = pathSegments[0];
  const basePath = `/${baseSegment}`;
  const translatedBase = translations[basePath] || basePath;

  // Get remaining segments (dynamic routes like /1, /2, etc.)
  const remainingSegments = pathSegments.slice(1);

  // Reconstruct the translated path
  const translatedPath =
    translatedBase + (remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : '');

  return translatedPath;
};

/**
 * Utility function to create localized paths for internationalization
 * @param {string} path - The path to localize
 * @param {string} locale - The current locale (pt, en, es)
 * @returns {string} - The localized path
 */
export const createLocalizedPath = (path, locale) => {
  if (!path || path === '#' || path === 'javascript:void(0)') return '#';
  if (path === '/') return `/${locale}`;
  
  // Translate the route according to locale
  const translatedPath = getTranslatedRoute(path, locale);
  
  // Always add locale prefix for all languages
  return `/${locale}${translatedPath}`;
};

/**
 * Utility function to normalize paths for comparison (removes locale prefix)
 * @param {string} path - The path to normalize
 * @param {string} locale - The current locale
 * @returns {string} - The normalized path
 */
export const normalizePath = (path, locale) => {
  if (!path) return '';

  // Remove locale prefix if it exists
  const pathWithoutLocale = path.replace(/^\/(pt|en|es)/, '') || '/';

  // For default locale (pt), don't add prefix
  if (locale === 'pt') {
    return pathWithoutLocale;
  }

  // For other locales, add prefix
  return `/${locale}${pathWithoutLocale}`;
};

/**
 * Utility function to check if a path should be forcibly inactive
 * @param {string} pathname - The pathname to check
 * @param {string} currentPathname - The current pathname
 * @returns {boolean} - Whether the path should be inactive
 */
export const makeForcelyInactive = (pathname, currentPathname) => {
  const isInactive = ['/services', '/services/1', '/noticias', '/noticias/1', '/contact'].includes(
    pathname,
  );
  return isInactive ? false : pathname === currentPathname;
};
