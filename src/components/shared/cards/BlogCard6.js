'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { translateCategory } from '@/utils/translateTags';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const BlogCard6 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, slug, image, category, date, day, month } = blog || {};
  const blogSlug = slug || id;
  const detailPath = createLocalizedPath(`/noticias/${blogSlug}`, locale);
  const translatedMonth = translateMonth(month, locale);
  return (
    <div className="blog-style-2 style-6">
      <div className="blog-images">
        <img src={image ? image : '/images/blog/h2-blog-1.webp'} alt="Images" />
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
        <div className="desc">
          <p>{desc || t('blog_card_desc')}</p>
        </div>
        <div className="blog-button">
          <ButtonPrimary text={t('read_more')} url={detailPath} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard6;
