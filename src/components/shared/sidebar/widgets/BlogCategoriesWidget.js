'use client';
import countDataLength from '@/libs/countDataLength';
import filterItems from '@/libs/filterItems';
import getBlogCategories from '@/libs/getBlogCategories';
import getBlogs from '@/libs/getBlogs';
import makePath from '@/libs/makePath';
import { createLocalizedPath } from '@/utils/pathUtils';
import { translateCategory } from '@/utils/translateTags';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCategoriesWidget = () => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const categories = getBlogCategories();
  const blogs = getBlogs();
  return (
    <div className="tj-sidebar-widget widget_categories wow fadeInUp" data-wow-delay="0.5s">
      <h5 className="tj-sidebar-widget-title">{t('categories')}</h5>
      <ul>
        {categories?.length
          ? categories?.map((category, idx) => {
              const translatedCategory = translateCategory(category, tCommon);
              return (
                <li key={idx}>
                  <Link
                    href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}
                  >
                    {translatedCategory}
                  </Link>{' '}
                  ({countDataLength(filterItems(blogs, 'category', makePath(category)))})
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};

export default BlogCategoriesWidget;
