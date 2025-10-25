'use client';
import { makeForcelyInactive, normalizePath } from '@/utils/pathUtils';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

// check active link with internationalization support
const checkActive = (mainObject, currentPathname, isRestricted, locale) => {
  const { path, submenu } = mainObject;
  const normalizedPath = normalizePath(path, locale);
  const normalizedCurrentPath = normalizePath(currentPathname, locale);

  const isActiveLink =
    (isRestricted
      ? makeForcelyInactive(normalizedPath, normalizedCurrentPath)
      : normalizedPath === normalizedCurrentPath) ||
    submenu?.some(({ items, path: path1 }) => {
      const normalizedSubPath = normalizePath(path1, locale);
      return (
        normalizedSubPath === normalizedCurrentPath ||
        items?.some(({ path: path2 }) => {
          const normalizedItemPath = normalizePath(path2, locale);
          return isRestricted
            ? makeForcelyInactive(normalizedItemPath, normalizedCurrentPath)
            : normalizedItemPath === normalizedCurrentPath;
        })
      );
    });
  return isActiveLink;
};

export default function useActiveLinkI18n() {
  const makeActiveLink = (modifiableObject) => {
    const currentPathname = usePathname();
    const locale = useLocale();
    const { name, path } = modifiableObject;
    // Check if it's a pages menu (path is '#' or 'javascript:void(0)')
    const isPages = path === '#' || path === 'javascript:void(0)';

    const currentObject = {
      ...modifiableObject,
      isActive: checkActive(modifiableObject, currentPathname, isPages, locale),
      submenu: modifiableObject?.submenu?.length
        ? modifiableObject?.submenu?.map((submenuItem) => ({
            ...submenuItem,
            isActive: checkActive(submenuItem, currentPathname, false, locale),
            items: submenuItem?.items?.length
              ? submenuItem?.items?.map((item) => ({
                  ...item,
                  isActive: checkActive(item, currentPathname, isPages, locale),
                }))
              : [],
          }))
        : [],
    };

    return currentObject;
  };
  return makeActiveLink;
}
