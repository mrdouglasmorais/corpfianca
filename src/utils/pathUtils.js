/**
 * Route translations mapping
 */
const routeTranslations = {
  pt: {
    '/contact': '/contato',
    '/about': '/sobre',
    '/services': '/servicos',
    '/team': '/equipe',
    '/careers': '/carreiras',
    '/shop': '/loja',
    '/login': '/entrar',
    '/password': '/senha',
    '/pricing-plan': '/planos',
    '/faq': '/perguntas-frequentes',
    '/history': '/historia',
    '/blog-grid': '/noticias-grade',
    '/blog-sidebar': '/noticias-sidebar',
    '/cart': '/carrinho',
    '/checkout': '/finalizar-compra',
    '/wishlist': '/lista-desejos',
  },
  en: {
    '/contact': '/contact',
    '/about': '/about',
    '/services': '/services',
    '/team': '/team',
    '/careers': '/careers',
    '/shop': '/shop',
    '/login': '/login',
    '/password': '/password',
    '/pricing-plan': '/pricing-plan',
    '/faq': '/faq',
    '/history': '/history',
    '/blog-grid': '/blog-grid',
    '/blog-sidebar': '/blog-sidebar',
    '/cart': '/cart',
    '/checkout': '/checkout',
    '/wishlist': '/wishlist',
  },
  es: {
    '/contact': '/contacto',
    '/about': '/acerca',
    '/services': '/servicios',
    '/team': '/equipo',
    '/careers': '/carreras',
    '/shop': '/tienda',
    '/login': '/iniciar-sesion',
    '/password': '/contrasena',
    '/pricing-plan': '/planes',
    '/faq': '/preguntas-frecuentes',
    '/history': '/historia',
    '/blog-grid': '/noticias-grid',
    '/blog-sidebar': '/noticias-sidebar',
    '/cart': '/carrito',
    '/checkout': '/finalizar-compra',
    '/wishlist': '/lista-deseos',
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
  const translatedPath = translatedBase + (remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : '');
  
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
  if (path === '/') return locale === 'pt' ? '/' : `/${locale}`;

  // Translate the route according to locale
  const translatedPath = getTranslatedRoute(path, locale);

  // For Portuguese (primary language), don't add prefix
  if (locale === 'pt') {
    return translatedPath;
  }
  // For other locales, add prefix
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
