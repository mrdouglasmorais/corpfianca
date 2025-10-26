/**
 * Utility to translate blog titles and descriptions
 * This function should be replaced with a proper translation service
 * in a production environment
 */

export const translateBlogTitle = (title, locale = 'pt') => {
  if (!title) return '';

  // Fallback to a generic description if translation is not available
  if (locale === 'pt') {
    return title; // Keep original English for now
  }

  return title;
};

export const translateBlogDesc = (desc, locale = 'pt') => {
  if (!desc) return '';

  // In a real application, this would fetch from a translation API or database
  // For now, we return a generic translated description
  if (locale === 'pt') {
    return 'Nossa missão é capacitar empresas de todos os tamanhos a prosperar em um mercado em constante mudança. Estamos comprometidos em entregar valor excepcional através de nossa abordagem estratégica e métodos inovadores.';
  }

  if (locale === 'es') {
    return 'Nuestra misión es capacitar a empresas de todos los tamaños para prosperar en un mercado en constante cambio. Estamos comprometidos a brindar valor excepcional a través de nuestro enfoque estratégico y métodos innovadores.';
  }

  return desc;
};
