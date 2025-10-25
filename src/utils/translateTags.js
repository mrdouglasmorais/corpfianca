/**
 * Utility function to translate tags to different languages
 * @param {string} tag - The tag to translate
 * @param {Function} t - Translation function from next-intl
 * @returns {string} - Translated tag
 */
export const translateTag = (tag, t) => {
  const tagMap = {
    Strategy: t('tag_strategy'),
    Growth: t('tag_growth'),
    Design: t('tag_design'),
    Marketing: t('tag_marketing'),
    Business: t('tag_business'),
    Branding: t('tag_branding'),
  };

  return tagMap[tag] || tag;
};

/**
 * Utility function to translate blog/news categories
 * @param {string} category - The category to translate
 * @param {Function} t - Translation function from next-intl
 * @returns {string} - Translated category
 */
export const translateCategory = (category, t) => {
  const categoryMap = {
    Branding: t('category_branding'),
    Business: t('category_business'),
    Consuting: t('category_consulting'),
    Consulting: t('category_consulting'),
    Innovations: t('category_innovations'),
    Managements: t('category_managements'),
    Marketing: t('category_marketing'),
  };

  return categoryMap[category] || category;
};

/**
 * Translate an array of tags
 * @param {Array<string>} tags - Array of tags to translate
 * @param {Function} t - Translation function from next-intl
 * @returns {Array<string>} - Array of translated tags
 */
export const translateTags = (tags, t) => {
  if (!tags || !Array.isArray(tags)) return [];
  return tags.map((tag) => translateTag(tag, t));
};

/**
 * Utility function to translate team member roles/designations
 * @param {string} role - The role/designation to translate
 * @param {Function} t - Translation function from next-intl
 * @returns {string} - Translated role
 */
export const translateRole = (role, t) => {
  const roleMap = {
    Manager: t('role_manager'),
    'Co. Founder': t('role_co_founder'),
    'Co Founder': t('role_co_founder'),
    'Sr. Manager': t('role_sr_manager'),
    'Sr Manager': t('role_sr_manager'),
    'Sr. Marketer': t('role_sr_marketer'),
    'Sr Marketer': t('role_sr_marketer'),
    'Sr. Dsigner': t('role_sr_designer'),
    'Sr Dsigner': t('role_sr_designer'),
    'Sr. Designer': t('role_sr_designer'),
    'Sr Designer': t('role_sr_designer'),
  };

  return roleMap[role] || role;
};

export default translateTag;
