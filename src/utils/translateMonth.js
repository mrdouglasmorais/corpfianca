/**
 * Traduz o nome do mês abreviado para o idioma atual
 * @param {string} month - Nome do mês em inglês (ex: "JUL", "OCT")
 * @param {string} locale - Locale atual (pt, en, es)
 * @returns {string} - Nome do mês traduzido
 */
export const translateMonth = (month, locale = 'pt') => {
  if (!month) return '';

  const monthTranslations = {
    pt: {
      JAN: 'JAN',
      FEB: 'FEV',
      MAR: 'MAR',
      APR: 'ABR',
      MAY: 'MAI',
      JUN: 'JUN',
      JUL: 'JUL',
      AUG: 'AGO',
      SEP: 'SET',
      OCT: 'OUT',
      NOV: 'NOV',
      DEC: 'DEZ',
    },
    en: {
      JAN: 'JAN',
      FEB: 'FEB',
      MAR: 'MAR',
      APR: 'APR',
      MAY: 'MAY',
      JUN: 'JUN',
      JUL: 'JUL',
      AUG: 'AUG',
      SEP: 'SEP',
      OCT: 'OCT',
      NOV: 'NOV',
      DEC: 'DEC',
    },
    es: {
      JAN: 'ENE',
      FEB: 'FEB',
      MAR: 'MAR',
      APR: 'ABR',
      MAY: 'MAY',
      JUN: 'JUN',
      JUL: 'JUL',
      AUG: 'AGO',
      SEP: 'SEP',
      OCT: 'OCT',
      NOV: 'NOV',
      DEC: 'DIC',
    },
  };

  const upperMonth = month.toUpperCase();
  return monthTranslations[locale]?.[upperMonth] || month;
};

export default translateMonth;
