'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { translateCategory } from '@/utils/translateTags';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard10 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, slug, img6, category, date, day, month } = blog || {};
  const blogSlug = slug || id;
  const detailPath = createLocalizedPath(`/noticias/${blogSlug}`, locale);
  const translatedMonth = translateMonth(month, locale);
  return (
    <div className="h10-blog_item wow fadeInUp" data-wow-delay={`0.${idx + 2}s`}>
      {idx > 1 ? (
        ''
      ) : (
        <>
          {idx === 0 ? (
            <div
              className="blog_image"
              style={{
                backgroundImage: `url('${img6 ? img6 : '/images/blog/tj-blog-8.webp'}')`,
              }}
              data-bg-image="./assets/images/blog/tj-blog-8.webp"
            ></div>
          ) : (
            <div className="blog_thumb">
              <img src={img6 ? img6 : '/images/blog/tj-blog-2.webp'} alt="" />
            </div>
          )}
          <div className="blog-date">
            <span className="day">{modifyNumber(day)}</span>
            <span className="month">{translatedMonth}</span>
          </div>
        </>
      )}

      <div className="blog_content">
        <div className="blog-two-meta">
          <ul>
            <li>
              <Link className="meta-link" href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="blog_title">
          <Link href={detailPath}>{title}</Link>
        </h4>
        {idx === 1 ? (
          <Link className="blog_btn text-btn-2" href={detailPath}>
            <span className="icon">
              <i className="tji-angle-right"></i>
            </span>
            <span className="text">{t('learn_more')}</span>
            <span className="icon">
              <i className="tji-angle-right"></i>
            </span>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BlogCard10;
