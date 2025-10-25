'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import BlogCard3 from '@/components/shared/cards/BlogCard3';
import getBlogs from '@/libs/getBlogs';
import { useTranslations } from 'next-intl';

const Blogs3 = () => {
  const t = useTranslations('blogs_section');
  const blogs = getBlogs().slice(0, 3);
  return (
    <section className="tj-blog-section-three section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-2">
              <div className="sec-text">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                  {t('subtitle')}
                </span>
                <h2 className="sec-title text-anim">{t('title')}</h2>
              </div>
              <div className="blog-button wow fadeInUp" data-wow-delay="0.3s">
                <ButtonPrimary text={t('explore_more')} url={'/blogs'} />
              </div>
            </div>
          </div>
        </div>
        <div className="row rg-30  rightSwipeWrap">
          {blogs?.length
            ? blogs?.map((blog, idx) => (
                <div key={idx} className="col-xl-4 col-md-6">
                  <BlogCard3 blog={blog} idx={idx} />
                </div>
              ))
            : ''}
        </div>
      </div>
    </section>
  );
};

export default Blogs3;
