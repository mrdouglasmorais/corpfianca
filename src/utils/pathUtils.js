/**
 * Utility function to create localized paths for internationalization
 * @param {string} path - The path to localize
 * @param {string} locale - The current locale (pt, en, es)
 * @returns {string} - The localized path
 */
export const createLocalizedPath = (path, locale) => {
  if (!path || path === '#' || path === 'javascript:void(0)') return '#';
  if (path === '/') return `/${locale}`;
  // Always include locale prefix for all paths
  return `/${locale}${path}`;
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
  const isInactive = [
    '/services',
    '/services/1',
    '/portfolios',
    '/portfolios/1',
    '/blogs',
    '/blogs/1',
    '/contact',
  ].includes(pathname);
  return isInactive ? false : pathname === currentPathname;
};
