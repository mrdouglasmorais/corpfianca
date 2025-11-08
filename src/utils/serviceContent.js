export const getLocalizedServiceContent = (service, locale = 'pt') => {
  if (!service || !service.content) {
    return {
      title: service?.title || '',
      cardSummary: '',
      titleLarge: service?.title || '',
      summary: '',
      details: '',
      highlights: [],
    };
  }

  const availableLocales = Object.keys(service.content);
  const safeLocale = availableLocales.includes(locale) ? locale : 'pt';
  const localized = service.content[safeLocale] || {};

  return {
    title: localized.title || service.title || '',
    cardSummary: localized.cardSummary || localized.summary || '',
    titleLarge: localized.titleLarge || localized.title || service.title || '',
    summary: localized.summary || '',
    details: localized.details || '',
    highlights: Array.isArray(localized.highlights) ? localized.highlights : [],
  };
};

export default getLocalizedServiceContent;
