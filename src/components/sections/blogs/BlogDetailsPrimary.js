'use client';
import PopupVideo from '@/components/shared/popup-video/PopupVideo';
import BlogSidebar from '@/components/shared/sidebar/BlogSidebar';
import { useCurrentItem } from '@/context_api/CurrentItemContext';
import getBlogs from '@/libs/getBlogs';
import getPreviousNextItem from '@/libs/getPreviousNextItem';
import makePath from '@/libs/makePath';
import { translateTags } from '@/utils/translateTags';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';

const BlogDetailsPrimary = ({ setCurrentTitle, blogId }) => {
  const t = useTranslations('blogs_section');
  const tDetails = useTranslations('blog_details');
  const tCommon = useTranslations('common');
  const items = getBlogs();
  const currentId = useCurrentItem() || blogId;
  const { prevId, nextId, currentItem, isPrevItem, isNextItem } = getPreviousNextItem(
    items,
    currentId,
  );
  const title = currentItem?.title || '';
  const id = currentItem?.id || null;
  const detailsImg = currentItem?.detailsImg || '';
  const tags = currentItem?.tags || [];
  const translatedTags = translateTags(tags, tCommon);
  const author = currentItem?.author || 'Burdee Nicolas';
  const dateReleased = currentItem?.dateReleased || '29 Sep,2024';
  const desc = currentItem?.desc || [];
  const descArray = Array.isArray(desc) ? desc : desc ? [desc] : [];
  useEffect(() => {
    if (title) {
      setCurrentTitle(title);
    }
  }, [currentId, title]);
  return (
    <section className="tj-post-area section-space">
      <div className="container">
        <div className="row rg-50">
          <div className="col-lg-8">
            <div className="tj-post-wrapper">
              <article className="tj-post-single-post">
                <div className="tj-post-thumb hover:shine wow fadeInUp" data-wow-delay="0.1s">
                  <img
                    src={detailsImg ? detailsImg : '/images/blog/tj-blog-1.webp'}
                    alt="post-image"
                  />
                </div>
                <h3 className="tj-post-title text-anim">{title}</h3>
                <div className="blog-category-two wow fadeInUp" data-wow-delay="0.3s">
                  <div className="category-item">
                    <div className="cate-images">
                      <img src="/images/blog/author-1.png" alt="Images" />
                    </div>
                    <div className="cate-text">
                      <span className="degination">{t('authored_by')}</span>
                      <h6 className="title">
                        <Link href={`/noticias/${id}`}>{author}</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="category-item">
                    <div className="cate-icons">
                      <i className="tji-calender"></i>
                    </div>
                    <div className="cate-text">
                      <span className="degination">{t('date_released')}</span>
                      <h6 className="text">{dateReleased}</h6>
                    </div>
                  </div>
                </div>
                <div className="tj-entry-content">
                  {descArray && descArray.length > 0 ? (
                    descArray.map((paragraph, idx) => (
                      <p key={idx} className="wow fadeInUp" data-wow-delay={`0.${idx * 2 + 1}s`}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="wow fadeInUp" data-wow-delay="0.1s">
                        {currentItem?.desc || ''}
                      </p>
                    </>
                  )}
                  <blockquote className="wow fadeInUp" data-wow-delay="0.1s">
                    <p>{tDetails('greatest_asset')}</p>
                    <p>
                      <cite>Aryan Greene</cite>
                    </p>
                  </blockquote>
                  {descArray && descArray.length > 2 && (
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      {descArray[2]}
                    </p>
                  )}

                  <div className="tj-check-list">
                    <h4 className="text-anim">{tDetails('key_lessons')}</h4>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      {descArray[0] || ''}
                    </p>
                    <ul className="wow fadeInUp" data-wow-delay="0.3s">
                      <li>
                        <i className="tji-double-check"></i> {tDetails('discover_expertise')}
                      </li>
                      <li>
                        <i className="tji-double-check"></i> {tDetails('journey_commitment')}
                      </li>
                      <li>
                        <i className="tji-double-check"></i> {tDetails('meet_team')}
                      </li>
                      <li>
                        <i className="tji-double-check"></i> {tDetails('meet_team')}
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tj-post-thumb mb-0 hover:shine wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img src="/images/blog/tj-blog-4.webp" alt="post-image" />
                    <PopupVideo>
                      <Link
                        className="play-btn glightbox video-popup"
                        href="https://www.youtube.com/watch?v=eEzD-Y97ges"
                      >
                        <i className="fa-sharp fa-solid fa-play"></i>
                      </Link>
                    </PopupVideo>
                  </div>
                  <h4 className="text-anim">{tDetails('conclusions')}</h4>
                  {descArray && descArray.length > 3 ? (
                    <>
                      <p className="wow fadeInUp" data-wow-delay="0.1s">
                        {descArray[3]}
                      </p>
                      {descArray[4] && (
                        <p className="wow fadeInUp" data-wow-delay="0.3s">
                          {descArray[4]}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      {currentItem?.conclusions || ''}
                    </p>
                  )}
                </div>
              </article>
              {/* <!-- post tag and share --> */}
              <div className="tj-post-details_tags_share wow fadeInUp" data-wow-delay="0.1s">
                <div className="tj-tags tagcloud">
                  <span className="tag__title">{t('tags')}</span>
                  {translatedTags?.length
                    ? translatedTags?.map((tag, idx) => (
                        <Link key={idx} href={`/noticias?tag=${makePath(tag)}`}>
                          {tag}
                        </Link>
                      ))
                    : ''}
                </div>
                <div className="tj-socials_share">
                  <span className="tag__title">{t('share')}</span>
                  <Link href="https://www.facebook.com/" title="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="https://x.com/" title="Twitter">
                    <i className="fab fa-x-twitter"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/" title="Linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="https://www.pinterest.com/" title="Pinterest">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
              {/* <!-- post navigation --> */}
              <div className="tj-post__navigation wow fadeInUp" data-wow-delay="0.3s">
                {/* <!-- previous post --> */}
                <div
                  className="tj-nav__post previous"
                  style={{ visibility: isPrevItem ? 'visible' : 'hidden' }}
                >
                  <div className="tj-nav-post__nav prev_post">
                    <Link href={isPrevItem ? `/noticias/${prevId}` : '#'}>
                      <span>
                        <i className="tji-arrow-left"></i>
                      </span>
                      {t('previous')}
                    </Link>
                  </div>
                </div>
                <Link href={'/noticias'} className="tj-nav-post__grid">
                  <i className="tji-square-cube"></i>
                </Link>
                {/* <!-- next post --> */}
                <div
                  className="tj-nav__post next"
                  style={{ visibility: isNextItem ? 'visible' : 'hidden' }}
                >
                  <div className="tj-nav-post__nav next_post">
                    <Link href={isNextItem ? `/noticias/${nextId}` : '#'}>
                      {t('next')}
                      <span>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPrimary;
