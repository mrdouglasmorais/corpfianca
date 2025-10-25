'use client';
import makePath from '@/libs/makePath';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard3 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const { title, desc, id, img2, category, date, day, month } = blog || {};
  return (
    <div className="blog-style-3 right-swipe">
      <div className="blog-images">
        <Link href={`/blogs/${id}`}>
          <img src={img2 ? img2 : '/images/blog/h2-blog-1.webp'} alt="Images" />
        </Link>
        <div className="blog_category">
          <ul>
            <li>
              <Link href={`/blogs?category=${makePath(category)}`}>{category}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-three-meta">
          <ul>
            <li>{date}</li>
            <li>{t('comments')}</li>
          </ul>
        </div>
        <h4 className="title under-line">
          <Link href={`/blogs/${id}`}>{title}</Link>
        </h4>
        <div className="desc">
          <p>
            In today's dynamic business environment, the key to success lies in strategic planning.
          </p>
        </div>
        <div className="blog-button">
          <Link className="blog-btn text-btn" href={`/blogs/${id}`}>
            {t('read_more')} <i className="tji-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard3;
