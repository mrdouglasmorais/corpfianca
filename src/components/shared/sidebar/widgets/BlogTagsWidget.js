'use client';
import getBlogTags from '@/libs/getBlogTags';
import makePath from '@/libs/makePath';
import { createLocalizedPath } from '@/utils/pathUtils';
import { translateTags } from '@/utils/translateTags';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogTagsWidget = () => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const tags = getBlogTags();
  const translatedTags = translateTags(tags, tCommon);

  return (
    <div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.7s">
      <h5 className="tj-sidebar-widget-title">{t('tags_title')}</h5>
      <div className="tagcloud">
        {translatedTags?.length
          ? translatedTags?.map((tag, idx) => (
              <Link key={idx} href={createLocalizedPath(`/noticias?tag=${makePath(tag)}`, locale)}>
                {' '}
                {tag}
              </Link>
            ))
          : ''}
      </div>
    </div>
  );
};

export default BlogTagsWidget;
