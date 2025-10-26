'use client';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import getALlServices from '@/libs/getALlServices';
import getBlogs from '@/libs/getBlogs';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MobileMenu = () => {
  const t = useTranslations('mobile_menu');
  const tHeader = useTranslations('header');
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchTimeoutRef = useRef(null);
  const searchContainerRef = useRef(null);

  const services = getALlServices();
  const blogs = getBlogs();

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchTerm.length >= 2) {
      searchTimeoutRef.current = setTimeout(() => {
        const searchLower = searchTerm.toLowerCase();
        const results = [];

        // Buscar em serviços/produtos
        services.forEach((service) => {
          if (service.title.toLowerCase().includes(searchLower)) {
            // Criar slug a partir do título
            const slug = service.title
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .trim()
              .replace(/\s+/g, '-')
              .replace(/[^\w\-]+/g, '')
              .replace(/\-\-+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '');

            results.push({
              type: 'service',
              title: service.title,
              id: service.id,
              url: createLocalizedPath(`/services/${slug}`, locale),
            });
          }
        });

        // Buscar em notícias
        blogs.forEach((blog) => {
          if (blog.title.toLowerCase().includes(searchLower)) {
            results.push({
              type: 'blog',
              title: blog.title,
              id: blog.id,
              url: createLocalizedPath(`/noticias/${blog.id}`, locale),
            });
          }
        });

        setSuggestions(results.slice(0, 5));
        setShowSuggestions(true);
      }, 300);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchTerm, services, blogs, locale]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      window.location.href = createLocalizedPath(
        `/noticias?search=${encodeURIComponent(searchTerm)}`,
        locale,
      );
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="body-overlay"></div>
      <div className="hamburger-area" data-lenis-prevent>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_top d-flex align-items-center justify-content-between">
            <div className="hamburger_logo">
              <Link href="/" className="mobile_logo">
                <img src="/images/logos/primary-logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="hamburger_close">
              <button className="hamburger_close_btn hamburgerCloseBtn">
                <i className="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div
            className="hamburger_search"
            ref={searchContainerRef}
            style={{ position: 'relative' }}
          >
            <form onSubmit={handleSubmit}>
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
              <input
                type="search"
                autoComplete="off"
                name="s"
                placeholder={t('search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => {
                  if (suggestions.length > 0) setShowSuggestions(true);
                }}
              />
            </form>
            {showSuggestions && suggestions.length > 0 && (
              <div
                className="mobile-search-suggestions"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'var(--tj-color-theme-dark)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  marginTop: '5px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  zIndex: 10001,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                {suggestions.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    className="mobile-suggestion-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 15px',
                      color: 'var(--tj-color-common-white)',
                      textDecoration: 'none',
                      borderBottom:
                        idx < suggestions.length - 1
                          ? '1px solid rgba(255, 255, 255, 0.1)'
                          : 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    onClick={() => {
                      setShowSuggestions(false);
                      setSearchTerm('');
                    }}
                  >
                    <i className="tji-search" style={{ marginRight: '10px', fontSize: '14px' }}></i>
                    <span style={{ flex: 1, fontSize: '14px' }}>{item.title}</span>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'var(--tj-color-theme-primary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {item.type === 'service' ? tHeader('services') : tHeader('blog')}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="hamburger_language" style={{ display: 'block', width: '100%' }}>
            <LanguageSwitcher />
          </div>

          <div className="hamburger_menu">
            <div className="mobile_menu"></div>
          </div>

          <div className="hamburger-infos">
            <h4 className="hamburger-title">{t('contact_info')}</h4>
            <div className="contact-info">
              <div className="contact_item">
                <span className="subtitle">{t('email')}</span>
                <div className="text">
                  <Link className="link" href="mailto:suporte@corpfianca.com">
                    suporte@corpfianca.com
                  </Link>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">{t('phone')}</span>
                <div className="text">
                  <Link className="link" href="tel:000123456789">
                    (11) 0000-0000
                  </Link>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">{t('location')}</span>
                <div className="text">{t('location_address')}</div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h4 className="hamburger-title">{t('follow_us')}</h4>
            <ul>
              <li>
                <Link href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="https://x.com/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
