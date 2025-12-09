'use client';
import BlogSidebar from '@/components/shared/sidebar/BlogSidebar';
import { useCurrentItem } from '@/context_api/CurrentItemContext';
import getBlogs from '@/libs/getBlogs';
import getPreviousNextItem from '@/libs/getPreviousNextItem';
import makePath from '@/libs/makePath';
import { createLocalizedPath } from '@/utils/pathUtils';
import { translateCategory, translateTags } from '@/utils/translateTags';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogDetailsPrimary = ({ setCurrentTitle, blogSlug }) => {
  const t = useTranslations('blogs_section');
  const tDetails = useTranslations('blog_details');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const items = getBlogs();
  const currentIdentifier = useCurrentItem() || blogSlug;
  const { prevId, nextId, currentItem, isPrevItem, isNextItem } = getPreviousNextItem(
    items,
    currentIdentifier,
  );
  const title = currentItem?.title || '';
  const id = currentItem?.id || null;
  const slug = currentItem?.slug || (id ? `${id}` : '');
  const image = currentItem?.image || '';
  const category = currentItem?.category || '';
  const translatedCategory = category ? translateCategory(category, tCommon) : '';
  const categoryPath = category
    ? createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)
    : '';
  const tags = currentItem?.tags || [];
  const translatedTags = translateTags(tags, tCommon);
  const dateReleased = currentItem?.dateReleased || currentItem?.date || '29 Sep,2024';
  const descArray = Array.isArray(currentItem?.content)
    ? currentItem?.content
    : currentItem?.desc
    ? [currentItem?.desc]
    : [];
  const findSlugById = (lookupId) =>
    items?.find(({ id: blogId }) => blogId === lookupId)?.slug || (lookupId ? `${lookupId}` : '');
  const prevSlug = findSlugById(prevId);
  const nextSlug = findSlugById(nextId);
  const defaultSharePath = createLocalizedPath(`/noticias/${slug}`, locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const fallbackShareUrl = siteUrl ? `${siteUrl}${defaultSharePath}` : defaultSharePath;
  const [shareUrl, setShareUrl] = useState(fallbackShareUrl);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    } else {
      setShareUrl(fallbackShareUrl);
    }
  }, [fallbackShareUrl]);
  useEffect(() => {
    if (title) {
      setCurrentTitle(title);
    }
  }, [currentIdentifier, title, setCurrentTitle]);
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const shareMessage = encodeURIComponent(`${title} - ${shareUrl}`);
  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      href: `https://wa.me/?text=${shareMessage}`,
    },
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`,
    },
  ];
  return (
    <section className="tj-post-area section-space">
      <div className="container">
        <div className="row rg-50">
          <div className="col-lg-8">
            <div className="tj-post-wrapper">
              <article className="tj-post-single-post">
                <div className="tj-post-thumb hover:shine wow fadeInUp" data-wow-delay="0.1s">
                  <img
                    src={image ? image : '/images/blog/tj-blog-1.webp'}
                    alt="post-image"
                  />
                </div>
                <h3 className="tj-post-title text-anim">{title}</h3>
                <div className="blog-category-two wow fadeInUp" data-wow-delay="0.3s">
                  <div className="category-item">
                    <div className="cate-icons">
                      <i className="tji-calender"></i>
                    </div>
                    <div className="cate-text">
                      <span className="degination">{t('date_released')}</span>
                      <h6 className="text">{dateReleased}</h6>
                    </div>
                  </div>
                  {category && (
                    <div className="category-item">
                      <div className="cate-icons">
                        <i className="tji-layer-group"></i>
                      </div>
                      <div className="cate-text">
                        <span className="degination">{t('category')}</span>
                        <h6 className="title">
                          <Link href={categoryPath}>{translatedCategory}</Link>
                        </h6>
                      </div>
                    </div>
                  )}
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
                        <Link
                          key={idx}
                          href={createLocalizedPath(`/noticias?tag=${makePath(tag)}`, locale)}
                        >
                          {tag}
                        </Link>
                      ))
                    : ''}
                </div>
                <div className="tj-socials_share social-share-inline">
                  <span className="tag__title">{t('share')}</span>
                  {shareLinks.map(({ name, icon, href }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={name}
                    >
                      <i className={icon}></i>
                    </Link>
                  ))}
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
                    <Link
                      href={
                        isPrevItem ? createLocalizedPath(`/noticias/${prevSlug}`, locale) : '#'
                      }
                    >
                      <span>
                        <i className="tji-arrow-left"></i>
                      </span>
                      {t('previous')}
                    </Link>
                  </div>
                </div>
                <Link href={createLocalizedPath('/noticias', locale)} className="tj-nav-post__grid">
                  <i className="tji-square-cube"></i>
                </Link>
                {/* <!-- next post --> */}
                <div
                  className="tj-nav__post next"
                  style={{ visibility: isNextItem ? 'visible' : 'hidden' }}
                >
                  <div className="tj-nav-post__nav next_post">
                    <Link
                      href={
                        isNextItem ? createLocalizedPath(`/noticias/${nextSlug}`, locale) : '#'
                      }
                    >
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
