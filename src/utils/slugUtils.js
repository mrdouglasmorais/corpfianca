/**
 * Utility functions for creating and managing URL slugs
 */

/**
 * Create a slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The slug
 */
export const createSlug = (text) => {
  if (!text) return '';
  
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
};

/**
 * Get slug from a service/product
 * @param {object} service - The service object
 * @returns {string} - The slug
 */
export const getServiceSlug = (service) => {
  if (!service || !service.title) return '';
  return createSlug(service.title);
};

/**
 * Find service by slug
 * @param {Array} services - Array of services
 * @param {string} slug - The slug to find
 * @returns {object|null} - The service object or null
 */
export const findServiceBySlug = (services, slug) => {
  if (!services || !slug) return null;
  return services.find(service => getServiceSlug(service) === slug) || null;
};

