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
  const tTeam = useTranslations('teams_section');
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
                {tTeam('hello_i_am')} {name ? name : 'Esther Howard'}
              </h2>
              <span className="team-details__desig wow fadeInUp" data-wow-delay="0.1s">
                {desig ? translateRole(desig, t) : t('role_co_founder')}
              </span>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                {tTeam('work_experience_desc')}
              </p>
              <div className="team-details__contact-info wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li>
                    <span>{tTeam('email_address')}</span>
                    <Link href="mailto:contato@corpfianca.com">contato@corpfianca.com</Link>
                  </li>
                  <li>
                    <span>{tTeam('phone_number')}</span>
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
                <h4 className="team-details__subtitle text-anim">{tTeam('work_experience')}</h4>
                <p className="wow fadeInUp" data-wow-delay="0.1s">
                  {tTeam('work_experience_desc')}
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  {tTeam('work_experience_desc')}
                </p>
                <div className="team-details__experience__list wow fadeInUp" data-wow-delay="0.5s">
                  <ul>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>{tTeam('human_essential')}</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>{tTeam('human_essential')}</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>{tTeam('human_essential')}</p>
                    </li>
                    <li>
                      <i className="tji-double-check"></i>
                      <p>{tTeam('human_essential')}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-details__skills">
                <h4 className="team-details__subtitle text-anim">{tTeam('professional_skills')}</h4>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  {tTeam('work_experience_desc')}
                </p>
                <ul className="tj-progress__list wow fadeInUp" data-wow-delay="0.5s">
                  <li>
                    <h6 className="tj-progress__title">{tTeam('business_consultants')}</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="90">
                        <span className="tj-progress__perchant">90%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">{tTeam('client_communication')}</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="82">
                        <span className="tj-progress__perchant">82%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">{tTeam('business_strategy')}</h6>
                    <div className="tj-progress">
                      <div className="tj-progress__bar" data-perchant="88">
                        <span className="tj-progress__perchant">88%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6 className="tj-progress__title">{tTeam('digital_marketing')}</h6>
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
