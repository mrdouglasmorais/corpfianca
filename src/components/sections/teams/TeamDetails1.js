'use client';
import { useCurrentItem } from '@/context_api/CurrentItemContext';
import getTeamMembers from '@/libs/getTeamMembers';
import tjProgressBar from '@/libs/tjProgressBar';
import { translateRole } from '@/utils/translateTags';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef } from 'react';

const TeamDetails1 = ({ teamId }) => {
  const t = useTranslations('common');
  const items = getTeamMembers();
  const currentId = useCurrentItem() || teamId;
  const currentItem = items?.find(({ id }) => currentId === id);
  const name = currentItem?.name || '';
  const desig = currentItem?.desig || '';
  const imgLarge = currentItem?.imgLarge || '';
  const animContainerRef = useRef();
  useGSAP(() => {
    tjProgressBar(animContainerRef);
  });
  return (
    <section ref={animContainerRef} className="team-details">
      <div className="container">
        <div className="row justify-content-center">
          {/* <!--  left --> */}
          <div className="col-12 col-md-8 col-lg-5 ">
            <div
              className="team-details__img tj-sticky-top  hover:shine wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img src={imgLarge ? imgLarge : '/images/team/team-single.webp'} alt="team-member" />
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="col-12  col-lg-7 ">
            <div className="team-details__content">
              <h2 className="team-details__name text-anim">
                Hello, I am {name ? name : 'Esther Howard'}
              </h2>
              <span className="team-details__desig wow fadeInUp" data-wow-delay="0.1s">
                {desig ? translateRole(desig, t) : t('role_co_founder')}
              </span>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                Our mission is to empowers businesses sizes thrive businesses ev changing
                marketplace We are committed to the delivering exceptional value through strategic
                inset innovative approaches. Our consulting of our missing empower.
              </p>
              <div className="team-details__contact-info wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li>
                    <span>Email address</span>
                    <Link href="mailto:suporte@corpfianca.com">suporte@corpfianca.com</Link>
                  </li>
                  <li>
                    <span>Phone number</span>
                    <Link href="tel:+8321890640">+1 (009) 544-7826</Link>
                  </li>
                </ul>
              </div>
              <div className="tj-socials wow fadeInUp" data-wow-delay="0.7s">
                <ul>
                  <li>
                    <Link href="https://www.facebook.com">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-details__experience">
                <h4 className="team-details__subtitle text-anim">Work experience</h4>
                <p className="wow fadeInUp" data-wow-delay="0.1s">
                  Our mission is to empowers businesses size to thrivie in ses ever changing
                  marketplace We are committed to the delivering exceptionals the value thro
                  strategic ins innovative approaches. Our consulting of our missing empowers
                  businesses of all sizes Committed to the delivering exceptional in the values thro
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  Our mission is to empowers businesses size to thrivie in ses ever changing
                  marketplace We are committed to the delivering exceptionals the value thro
                  strategic ins innovative approaches. Our consulting of our missing empowers
                </p>
                <div className="team-details__experience__list wow fadeInUp" data-wow-delay="0.5s">
                  <ul>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>We believe that the human essential start any successful project.</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>We believe that the human essential start any successful project.</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>We believe that the human essential start any successful project.</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>We believe that the human essential start any successful project.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-details__skills">
                <h4 className="team-details__subtitle text-anim">Professional skills</h4>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  Our mission is to empowers businesses size to thrivie in ses ever changing
                  marketplace We are committed to the delivering exceptionals the value thro
                  strategic ins innovative approaches. Our consulting of our missing empowers
                </p>
                <ul className="tj-progress__list wow fadeInUp" data-wow-delay="0.5s">
                  <li>
                    <h6 className="tj-progress__title">Business consultants</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="90">
                        <span className="tj-progress__perchant">90%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">Client communication</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="82">
                        <span className="tj-progress__perchant">82%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">Business strategy</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="88">
                        <span className="tj-progress__perchant">88%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">Digital marketing</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="90">
                        <span className="tj-progress__perchant">90%</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails1;
