'use client';
import makePath from '@/libs/makePath';
import modifyNumber from '@/libs/modifyNumber';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const BlogCard9 = ({ blog, idx }) => {
  const t = useTranslations('blogs_section');
  const { title, desc, id, img5, category, date, day, month } = blog || {};
  return (
    <article className="h9-blog-item wow fadeInUp" data-wow-delay={`0.${idx + 3 + idx}s`}>
      <div className="blog_content_wrap">
        <div className="blog-date">
          <span className="day">{modifyNumber(day)}</span>
          <span className="month">{month}</span>
        </div>
        <div className="blog_content">
          <h3 className="blog_title">
            <Link href={`/blogs/${id}`}>{title}</Link>
          </h3>
          <div className="excerpt">{desc || ''}</div>

          <div className="blog-two-meta">
            <ul>
              <li>
                <Link className="meta-link" href={`/blogs?category=${makePath(category)}`}>
                  {category}
                </Link>
              </li>
              <li>{t('comments')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="blog_img hover:shine"
        style={{
          backgroundImage: `url('${img5 ? img5 : '/images/blog/tj-blog-8.webp'}')`,
        }}
      ></div>
    </article>
  );
};

export default BlogCard9;
