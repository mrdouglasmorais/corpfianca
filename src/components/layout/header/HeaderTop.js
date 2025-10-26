'use client';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const HeaderTop = ({ type }) => {
  const t = useTranslations('common');
  const tHeaderTop = useTranslations('header_top');
  const [curretHeight, setCurrentHeight] = useState(null);
  const headerTopRef = useRef();

  useEffect(() => {
    const headerTop = headerTopRef.current;
    if (headerTop && type === 2) {
      const headerTopWrapper = headerTop.querySelector('.header-topbar_wrap');
      setCurrentHeight(headerTopWrapper.offsetHeight);
    }
  }, [type]);

  return (
    <div
      className={`header-topbar ${
        type === 3 ? 'header-10-topbar' : type === 2 ? ' header-9-topbar' : ''
      }`}
      style={
        type === 2 && curretHeight !== null ? { height: `${curretHeight}px`, padding: '0px' } : {}
      }
      ref={headerTopRef}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-topbar_wrap">
              <div className="topbar_note">
                {type == 2 ? (
                  <img src="/images/icons/verified.svg" alt="" />
                ) : (
                  <i className="tji-check"></i>
                )}{' '}
                {tHeaderTop('trusted_partner')}
                <Link href="/contact">
                  <span>{tHeaderTop('join_us_now')}</span>
                  <i className="tji-angle-right"></i>
                </Link>
              </div>

              {type === 2 ? (
                <button
                  onClick={() => {
                    setCurrentHeight(0);
                  }}
                  type="button"
                  className="header-topbar-toggler"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 1L17 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              ) : (
                <div
                  className="topbar_infos"
                  style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
                >
                  <div className="info_item">
                    <span>
                      <i className="tji-clock"></i>
                    </span>
                    <span>{tHeaderTop('working_hours')}</span>
                  </div>
                  <div className="info_item">
                    <span>
                      <i className="tji-email"></i>
                    </span>
                    <Link href="mailto:suporte@corpfianca.com">suporte@corpfianca.com</Link>
                  </div>
                  <div
                    className="info_item"
                    style={{
                      display: 'flex',
                      visibility: 'visible',
                      opacity: 1,
                      position: 'relative',
                      zIndex: 99999,
                    }}
                  >
                    <LanguageSwitcher />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
