'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import PopupVideo from '@/components/shared/popup-video/PopupVideo';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const About3 = () => {
  const t = useTranslations('funfacts_section');
  const tAbout = useTranslations('about_section');
  const locale = useLocale();
  return (
    <section id="about" className="tj-about-section-three section-bottom-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-wrapper-two">
              <div
                className="about-images-group-two hover:shine wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <img src="/images/about/h3-images-1.webp" alt="Images" />
                <div className="about-video-box">
                  <div className="video-box">
                    <PopupVideo>
                      <Link
                        className="circle glightbox video-popup"
                        href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
                      >
                        <i className="fa-sharp fa-solid fa-play"></i>
                      </Link>
                    </PopupVideo>
                  </div>
                  <span className="sub-title">{t('click_for_watch')}</span>
                  <h5 className="title">{t('see_latest_video')}</h5>
                </div>
              </div>
              <div className="about-content-three">
                <div className="sec-heading style-2">
                  <span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
                    {tAbout('transformative_solution')}
                  </span>
                  <h2 className="sec-title  text-anim">{tAbout('know_expertise')}</h2>
                  <div className="desc wow fadeInUp" data-wow-delay="0.7s">
                    <p>{tAbout('know_expertise_desc')}</p>
                  </div>
                  <div className="check-list-one wow fadeInUp" data-wow-delay="0.9s">
                    <ul>
                      <li>
                        <i className="tji-double-check"></i>
                        {tAbout('discover_expertise')}
                      </li>
                      <li>
                        <i className="tji-double-check"></i>
                        {tAbout('journey_commitment')}
                      </li>
                      <li>
                        <i className="tji-double-check"></i>
                        {tAbout('meet_team_visions')}
                      </li>
                    </ul>
                  </div>
                  <div className="about-button wow fadeInUp" data-wow-delay="0.9s">
                    <ButtonPrimary
                      text={tAbout('free_consultation')}
                      url={createLocalizedPath('/cotacao', locale)}
                    />
                  </div>
                </div>
                <div className="about-shapes zoominout">
                  <img src="/images/shapes/about-shapes.svg" alt="Shapes" />
                </div>
              </div>
              <div className="about_images hover:shine wow fadeInUp" data-wow-delay="0.11s">
                <img src="/images/about/h3-images-2.webp" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
