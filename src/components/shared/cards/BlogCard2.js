'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard2 = ({ blog, type, isSidebar, idx }) => {
  const t = useTranslations('blogs_section');
  const locale = useLocale();
  const { title, desc, id, img2, detailsImg, category, date, day, month } = blog || {};
  const translatedMonth = translateMonth(month, locale);
  return (
    <div
      className={`blog-style-2  ${type === 2 ? 'wow fadeInUp' : 'left-swipe'}`}
      data-wow-delay={
        type === 2
          ? `0.${isSidebar ? (idx % 2) + 1 + (idx % 2) : (idx % 3) + 1 + (idx % 3)}s`
          : '0s'
      }
    >
      <div className="blog-images">
        <img
          src={type === 2 && detailsImg ? detailsImg : img2 ? img2 : '/images/blog/h2-blog-1.webp'}
          alt="Images"
        />
        <div className="blog-date">
          <span className="date">{modifyNumber(day)}</span>
          <span className="month">{translatedMonth}</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-two-meta">
          <ul>
            <li>
              <Link className="meta-link" href={`/noticias?category=${makePath(category)}`}>
                {category}
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="title under-line">
          <Link href={`/noticias/${id}`}>{title}</Link>
        </h4>
        <div className="desc">
          <p>
            In today's dynamic business environment, the key to success lies in strategic planning.
          </p>
        </div>
        <div className="blog-button">
          <Link className="blog-btn text-btn" href={`/noticias/${id}`}>
            {t('read_more')} <i className="tji-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
