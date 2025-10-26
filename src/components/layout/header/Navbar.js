import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import useActiveLinkI18n from '@/hooks/useActiveLinkI18n';
import getNavItemsI18n from '@/libs/getNavItemsI18n';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const Navbar = ({ option, isStickyHeader }) => {
  const { isIndexPage, isInnerPage, isResumeBtn, headerType } = option;
  const makeActiveLink = useActiveLinkI18n();
  const t = useTranslations('navigation');
  const locale = useLocale();
  const navItems = getNavItemsI18n(t, locale);

  const homeNav = makeActiveLink(navItems[0]);
  const pagesNav = makeActiveLink(navItems[1]);
  const serviceNav = makeActiveLink(navItems[2]);
  const blogNav = makeActiveLink(navItems[3]);
  const contactNav = makeActiveLink(navItems[4]);

  return (
    <div
      className={`mainmenu ${
        (headerType === 3 || headerType == 4) && !isStickyHeader ? 'menu-3' : ''
      }  d-lg-block d-none`}
      id={isStickyHeader ? 'mainmenu' : 'main-menu'}
    >
      <ul>
        <li
          className={`${homeNav?.submenu?.length ? 'has-dropdown' : ''} ${homeNav?.isActive ? 'current-menu-ancestor' : ''}`}
        >
          <Link href={homeNav?.path ? homeNav?.path : '#'}>{homeNav?.name}</Link>
          {homeNav?.submenu?.length ? (
            <ul className="sub-menu header__mega-menu mega-menu  ">
              <li>
                <div className="mega-menu-wrapper">
                  <div className="container-fluid gap-60-25">
                    <div className="row">
                      {homeNav?.submenu?.map((item, idx) => (
                        <div key={idx} className="col-xl-3 col-lg-3 col-12">
                          <div className="tj-demo-thumb ">
                            <div className="image">
                              <img
                                src={item?.img ? item?.img : '/images/header/demo/home-1.webp'}
                                alt=""
                              />
                              {item?.badge ? (
                                <span className="tj-demo-badge">{item?.badge}</span>
                              ) : (
                                ''
                              )}
                              <div className="tj-demo-button">
                                <ButtonPrimary
                                  text={t('view_demo')}
                                  url={item?.path}
                                  className={'header_btn'}
                                />
                              </div>
                            </div>
                            <h6 className="tj-demo-title">
                              <Link href={item?.path ? item?.path : '#'}>{item?.name}</Link>
                            </h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </li>
        <li className={`has-dropdown ${pagesNav?.isActive ? 'current-menu-ancestor' : ''}`}>
          <Link href="#">{pagesNav?.name}</Link>
          <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
            <li>
              <div className="mega-menu-wrapper">
                {pagesNav?.submenu?.length
                  ? pagesNav?.submenu?.map((pageItem, idx) => (
                      <div key={idx} className="mega-menu-pages-single">
                        <div className="mega-menu-pages-single-inner">
                          <div className="mega-menu-list">
                            {pageItem?.items?.length
                              ? pageItem?.items?.map((item, idx2) => (
                                  <Link
                                    key={100 + idx2}
                                    href={item?.path ? item?.path : '/'}
                                    className={item?.isActive ? 'active' : ''}
                                  >
                                    {item?.name}
                                  </Link>
                                ))
                              : ''}
                          </div>
                        </div>
                      </div>
                    ))
                  : ''}

                <div className="mega-menu-pages-single mega-menu-cta-column">
                  <div className="mega-menu-pages-single-inner">
                    <div className="mega-menu-cta-section">
                      <ButtonPrimary
                        text={t('register')}
                        url={createLocalizedPath('/register', locale)}
                        className={'mega-menu-cta-primary'}
                      />
                      <Link 
                        href={createLocalizedPath('/login', locale)}
                        className="mega-menu-login-link"
                      >
                        {t('login')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className={`has-dropdown ${serviceNav?.isActive ? 'current-menu-ancestor' : ''}`}>
          <Link href={serviceNav?.path ? serviceNav?.path : '/'}>{serviceNav?.name}</Link>
          <ul className="sub-menu  mega-menu-service">
            {serviceNav?.submenu?.length
              ? serviceNav?.submenu?.map((item, idx) => (
                  <li key={idx}>
                    <Link className="mega-menu-service-single" href={item?.path ? item?.path : '/'}>
                      {' '}
                      <span className="mega-menu-service-icon">
                        <i className={item?.icon ? item?.icon : 'tji-optimization'}></i>
                      </span>{' '}
                      <span className="mega-menu-service-title">
                        {item?.name ? item?.name : t('business_process_optimization_fallback')}
                      </span>{' '}
                      <span className="mega-menu-service-nav">
                        <i className="tji-arrow-right"></i>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                ))
              : ''}
          </ul>
        </li>
        <li
          className={`${blogNav?.submenu?.length ? 'has-dropdown' : ''} ${blogNav?.isActive ? 'current-menu-ancestor' : ''}`}
        >
          <Link href={blogNav?.path ? blogNav?.path : '#'}>{blogNav?.name}</Link>
          {blogNav?.submenu?.length ? (
            <ul className="sub-menu">
              {blogNav?.submenu?.map((item, idx) => (
                <li key={idx} className={item?.isActive ? 'current-menu-item' : ''}>
                  <Link href={item?.path ? item?.path : '/noticias'}>
                    {item?.name ? item?.name : t('blog')}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
        <li className={contactNav?.isActive ? 'current-menu-ancestor' : ''}>
          <Link href={contactNav?.path ? contactNav?.path : '#'}>
            {contactNav?.name ? contactNav?.name : t('contact_fallback')}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
