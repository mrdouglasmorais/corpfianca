'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import BlogCard4 from '@/components/shared/cards/BlogCard4';
import getBlogs from '@/libs/getBlogs';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';

const Blogs4 = () => {
  const t = useTranslations('blogs_section');
  const locale = useLocale();
  const blogs = getBlogs().slice(0, 3);
  return (
    <section className="tj-blog-section-four section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3">
              <div className="sec-text">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                  {t('subtitle')}
                </span>
                <h2 className="sec-title text-anim">{t('title')}</h2>
              </div>
              <div className="blog-button wow fadeInUp" data-wow-delay="0.3s">
                <ButtonPrimary
                  text={t('explore_more')}
                  url={createLocalizedPath('/noticias', locale)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row rg-30 leftSwipeWrap">
          {blogs?.length
            ? blogs?.map((blog, idx) => (
                <div key={idx} className="col-xl-4 col-md-6">
                  <BlogCard4 blog={blog} idx={idx} />
                </div>
              ))
            : ''}
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
