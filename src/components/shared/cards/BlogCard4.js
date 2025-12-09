'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { translateCategory } from '@/utils/translateTags';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard4 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, slug, image, category, date, day, month } = blog || {};
  const blogSlug = slug || id;
  const detailPath = createLocalizedPath(`/noticias/${blogSlug}`, locale);
  const translatedMonth = translateMonth(month, locale);
  return (
    <div className="blog-style-4 left-swipe">
      <div className="blog-images">
        <Link href={detailPath}>
          <img src={image ? image : '/images/blog/h2-blog-1.webp'} alt="Images" />
        </Link>
        <div className="blog-date">
          <span className="date">{modifyNumber(day)}</span>
          <span className="month">{translatedMonth}</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-two-meta">
          <ul>
            <li>
              <Link className="meta-link" href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="title under-line">
          <Link href={detailPath}>{title}</Link>
        </h4>
        <div className="blog-button">
          <Link className="blog-btn text-btn" href={detailPath}>
            {t('read_more')} <i className="tji-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard4;
