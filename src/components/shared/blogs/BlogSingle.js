'use client';
import makePath from '@/libs/makePath';
import { createLocalizedPath } from '@/utils/pathUtils';
import translateMonth from '@/utils/translateMonth';
import { translateCategory } from '@/utils/translateTags';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import PopupVideo from '../popup-video/PopupVideo';

const BlogSingle = ({ blog }) => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const {
    id,
    slug,
    detailsImg,
    title,
    desc,
    blogTopList,
    category,
    slider,
    author,
    popupVideo,
    day,
    month,
    date,
    comments,
  } = blog ? blog : {};

  const translatedMonth = translateMonth(month, locale);
  const blogSlug = slug || id;
  const detailPath = createLocalizedPath(`/noticias/${blogSlug}`, locale);
  const summary = Array.isArray(desc) ? desc[0] : desc;

  return (
    <article className="tj-post-item wow fadeInUp" data-wow-delay="0.1s">
      {slider?.length ? (
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={1200}
            navigation={{ nextEl: '.slider-next', prevEl: '.slider-prev' }}
            autoplay={{
              delay: 5000,
            }}
            modules={[Navigation, Autoplay]}
            className="blog-standard-slider"
          >
            {slider?.map((sliderImg, idx) => (
              <SwiperSlide key={idx}>
                <div className="tj-post-thumb">
                  <img
                    src={sliderImg ? sliderImg : '/images/blog/tj-blog-5.webp'}
                    alt="blog-image"
                  />
                  <div className="tj-post-date">
                    <span className="date">{day}</span>
                    <span className="month">{translatedMonth}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="blog-navigation">
              <button className="slider-prev">
                <span className="anim-icon">
                  <i className="tji-arrow-left"></i>
                  <i className="tji-arrow-left"></i>
                </span>
              </button>
              <button className="slider-next">
                <span className="anim-icon">
                  <i className="tji-arrow-right"></i>
                  <i className="tji-arrow-right"></i>
                </span>
              </button>
            </div>
          </Swiper>
        </div>
      ) : (
        <>
          <div className="tj-post-thumb">
            <img src={detailsImg ? detailsImg : '/images/blog/tj-blog-1.webp'} alt="blog-image" />
            {popupVideo ? (
              <PopupVideo>
                <Link className="play-btn glightbox video-popup" href={popupVideo}>
                  <i className="fa-sharp fa-solid fa-play"></i>
                </Link>
              </PopupVideo>
            ) : (
              ''
            )}

            <div className="tj-post-date">
              <span className="date">{day}</span>
              <span className="month">{translatedMonth}</span>
            </div>
          </div>
        </>
      )}

      <div className="tj-post-content">
        <div className="tj-post-meta">
          <ul>
            <li>
              <Link href={createLocalizedPath(`/noticias?category=${makePath(category)}`, locale)}>
                {translateCategory(category, tCommon)}
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="tj-post-title">
          <Link href={detailPath}>{title}</Link>
        </h3>
        <div className="tj-post-excerpt">{summary || ''}</div>
        <div className="tj-post-btn">
          <ButtonPrimary text={t('read_more')} url={detailPath} />
        </div>
      </div>
    </article>
  );
};

export default BlogSingle;
