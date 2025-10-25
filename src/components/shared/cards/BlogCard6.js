'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const BlogCard6 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const locale = useLocale();
  const { title, desc, id, img2, category, date, day, month } = blog || {};
  const translatedMonth = translateMonth(month, locale);
  return (
    <div className="blog-style-2 style-6">
      <div className="blog-images">
        <img src={img2 ? img2 : '/images/blog/h2-blog-1.webp'} alt="Images" />
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
          <ButtonPrimary text={t('read_more')} url={`/noticias/${id}`} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard6;
