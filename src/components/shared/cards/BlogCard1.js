'use client';
import makePath from '@/libs/makePath';
import { translateCategory } from '@/utils/translateTags';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard1 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const { title, desc, id, img1, category, date, day, month } = blog || {};
  return (
    <div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
      <div className="blog-images hover:shine">
        <Link href={`/noticias/${id}`}>
          <img src={img1 ? img1 : '/images/blog/blog-thumb-1.webp'} alt="Images" />
        </Link>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <ul>
            <li className="category">
              <Link href={`/noticias?category=${makePath(category)}`}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
            <li>{date}</li>
          </ul>
        </div>
        <h4 className="blog-title">
          <Link href={`/noticias/${id}`}>{title}</Link>
        </h4>
        {idx === 0 ? <div className="desc">{t('blog_card_desc')}</div> : ''}
        <Link className="blog-button text-btn" href={`/noticias/${id}`}>
          {t('read_more')} <i className="tji-arrow-right"></i>
        </Link>
        <div className="blog-meta meta-2 mb-0">
          <ul>
            <li>{date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard1;
