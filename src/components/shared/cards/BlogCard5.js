'use client';
import makePath from '@/libs/makePath';
import { translateCategory } from '@/utils/translateTags';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard5 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, slug, image, category, date, day, month } = blog || {};
  const blogSlug = slug || id;
  const detailPath = createLocalizedPath(`/noticias/${blogSlug}`, locale);
  return (
    <div className="blog-style-3 style-5 wow fadeInUp" data-wow-delay="0.2s">
      <div className="blog-images">
        <Link href={detailPath}>
          <img src={image ? image : '/images/blog/h2-blog-1.webp'} alt="Images" />
        </Link>
        <div className="blog_category">
          <ul>
            <li>
              <Link href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-three-meta">
          <ul>
            <li>{date}</li>
          </ul>
        </div>
        <h4 className="title under-line">
          <Link href={detailPath}>{title}</Link>
        </h4>
        <div className="blog-button">
          <Link className="blog-btn blog-btn-2" href={detailPath}>
            <span className="btn-icon">
              <i className="tji-arrow-right"></i>
            </span>
            <span className="btn-text">{t('read_more')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard5;
