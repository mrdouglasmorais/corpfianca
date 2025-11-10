/**
 * Route translations mapping
 */
const routeTranslations = {
  pt: {
    '/contact': '/contato',
    '/about': '/sobre',
    '/services': '/produtos',
    '/login': '/entrar',
    '/password': '/senha',
    '/register': '/cadastrar',
    '/faq': '/perguntas-frequentes',
    '/cotacao': '/cotacao',
    '/sinistros': '/sinistros',
  },
  en: {
    '/contact': '/contact',
    '/about': '/about',
    '/services': '/products',
    '/login': '/login',
    '/password': '/password',
    '/register': '/register',
    '/faq': '/faq',
    '/cotacao': '/quote',
    '/sinistros': '/claims',
  },
  es: {
    '/contact': '/contacto',
    '/about': '/acerca',
    '/services': '/productos',
    '/login': '/iniciar-sesion',
    '/password': '/contrasena',
    '/register': '/registrarse',
    '/faq': '/preguntas-frecuentes',
    '/cotacao': '/cotizacion',
    '/sinistros': '/siniestros',
  },
};

const SUPPORTED_LOCALES = ['pt', 'en', 'es'];
const DEFAULT_LOCALE = 'pt';

const getLocalePrefix = (locale) => {
  if (!locale || locale === DEFAULT_LOCALE) {
    return '';
  }
  return `/${locale}`;
};

/**
 * Get translated route for a given path and locale
 * @param {string} path - The path to translate
 * @param {string} locale - The current locale
 * @returns {string} - The translated path
 */
const getTranslatedRoute = (path, locale) => {
  const translations = routeTranslations[locale] || routeTranslations[DEFAULT_LOCALE];

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
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  if (path === '/') {
    const prefix = getLocalePrefix(safeLocale);
    return prefix || '/';
  }

  // Translate the route according to locale
  const translatedPath = getTranslatedRoute(path, safeLocale);
  const prefix = getLocalePrefix(safeLocale);

  if (translatedPath === '/') {
    return prefix || '/';
  }

  return `${prefix}${translatedPath}`;
};

/**
 * Utility function to normalize paths for comparison (removes locale prefix)
 * @param {string} path - The path to normalize
 * @param {string} locale - The current locale
 * @returns {string} - The normalized path
 */
export const normalizePath = (path, locale) => {
  if (!path) return '';
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  // Remove locale prefix if it exists
  const pathWithoutLocale = path.replace(/^\/(pt|en|es)(?=\/|$)/, '') || '/';
  const formattedPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;

  // For default locale (pt), don't add prefix
  if (safeLocale === DEFAULT_LOCALE) {
    return formattedPath || '/';
  }

  // For other locales, add prefix back
  if (formattedPath === '/') {
    return `/${safeLocale}`;
  }
  return `/${safeLocale}${formattedPath}`;
};

/**
 * Utility function to check if a path should be forcibly inactive
 * @param {string} pathname - The pathname to check
 * @param {string} currentPathname - The current pathname
 * @returns {boolean} - Whether the path should be inactive
 */
export const makeForcelyInactive = (pathname, currentPathname) => {
  const staticInactive = ['/services', '/noticias', '/contact'];
  const isDynamicService = pathname ? pathname.startsWith('/services/') : false;
  const isDynamicBlog = pathname ? pathname.startsWith('/noticias/') : false;
  const isInactive = staticInactive.includes(pathname) || isDynamicService || isDynamicBlog;
  return isInactive ? false : pathname === currentPathname;
};
