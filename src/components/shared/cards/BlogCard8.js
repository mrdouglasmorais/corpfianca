'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import translateMonth from '@/utils/translateMonth';
import { translateCategory } from '@/utils/translateTags';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const BlogCard8 = ({ blog, idx, currentIndex, handleCurrentIndex }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const { title, desc, id, img4, category, date, day, month } = blog || {};
  const translatedMonth = translateMonth(month, locale);
  return (
    <div
      className={`h8-blog-item ${currentIndex === idx ? 'active' : ''}	`}
      onMouseEnter={() => handleCurrentIndex(idx)}
    >
      <div className="blog-images">
        <img src={img4 ? img4 : '/images/blog/blog-thumb-1.webp'} alt="Images" />
        <div className="blog-date">
          <span className="date">{modifyNumber(day)}</span>
          <span className="month">{translatedMonth}</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-content-inner">
          <div className="blog-two-meta">
            <ul>
              <li>
                <Link className="meta-link" href={`/noticias?category=${makePath(category)}`}>
                  {translateCategory(category, tCommon)}
                </Link>
              </li>
            </ul>
          </div>
          <h4 className="title  under-line">
            <Link href={`/noticias/${id}`}>{title}</Link>
          </h4>
          <div className="desc">
            <p>
              In today dynamic business environment, the key to success lies. In today dnamic
              business environment.
            </p>
          </div>
          <div className="blog-button">
            <ButtonPrimary text={t('read_more')} url={`/noticias/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard8;
