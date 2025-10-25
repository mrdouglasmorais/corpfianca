'use client';
import makePath from '@/libs/makePath';
import { translateCategory } from '@/utils/translateTags';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard7 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, img3, category, date, day, month } = blog || {};
  return (
    <div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1 + idx}s`}>
      <div className="blog-images hover:shine">
        <Link href={createLocalizedPath(`/noticias/${id}`, locale)}>
          <img src={img3 ? img3 : '/images/blog/blog-thumb-5.webp'} alt="Images" />
        </Link>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <ul>
            <li className="category">
              <Link href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
            <li>{date}</li>
          </ul>
        </div>
        <h4 className="blog-title">
          <Link href={createLocalizedPath(`/noticias/${id}`, locale)}>{title}</Link>
        </h4>

        <div className="desc">{desc || t('blog_card_desc')}</div>
      </div>
    </div>
  );
};

export default BlogCard7;
