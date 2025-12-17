'use client';
import getALlServices from '@/libs/getALlServices';
import getBlogs from '@/libs/getBlogs';
import { getAllPages } from '@/utils/allPages';
import { createLocalizedPath } from '@/utils/pathUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

const HeaderSearchForm = () => {
  const t = useTranslations('header');
  const navigationT = useTranslations('navigation');
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchTimeoutRef = useRef(null);

  const services = useMemo(() => getALlServices(), []);
  const blogs = useMemo(() => getBlogs(), []);
  const allPages = useMemo(
    () =>
      getAllPages().map((page) => ({
        ...page,
        url: createLocalizedPath(page.path, locale),
      })),
    [locale],
  );

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
          const localizedTitle =
            getLocalizedServiceContent(service, locale).title || service.title || '';
          const searchable = `${service.title || ''} ${localizedTitle}`.toLowerCase();
          if (searchable.includes(searchLower)) {
            const slug = getServiceSlug(service);
            results.push({
              type: 'service',
              title: localizedTitle,
              id: service.id,
              url: createLocalizedPath(`/services/${slug}`, locale),
            });
          }
        });

        // Buscar em notícias
        blogs.forEach((blog) => {
          if (blog.title.toLowerCase().includes(searchLower)) {
            const blogSlug = blog.slug || blog.id;
            results.push({
              type: 'blog',
              title: blog.title,
              id: blog.id,
              url: createLocalizedPath(`/noticias/${blogSlug}`, locale),
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

  return (
    <>
      <div className="search_popup">
        <div className="search_close">
          <button type="button" className="search_close_btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L17 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form onSubmit={handleSubmit}>
                    <div className="search_input">
                      <h4 className="title">{t('search_title')}</h4>
                      <div className="search-box">
                        <input
                          className="search-input-field"
                          type="search"
                          placeholder={t('search_placeholder')}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          onFocus={() => {
                            if (suggestions.length > 0) setShowSuggestions(true);
                          }}
                          onBlur={() => {
                            setTimeout(() => setShowSuggestions(false), 200);
                          }}
                          required=""
                        />
                        <button type="submit">
                          <i className="tji-search"></i>
                        </button>
                        {showSuggestions && suggestions.length > 0 && (
                          <div className="search-suggestions">
                            {suggestions.map((item, idx) => (
                              <Link key={idx} href={item.url} className="suggestion-item">
                                <i className="tji-search"></i>
                                <span>{item.title}</span>
                                <span className="suggestion-type">
                                  {item.type === 'service' ? t('services') : t('blog')}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="search-pages">
                        <h5 className="title">{navigationT('pages')}</h5>
                        <div className="search-suggestions">
                          {allPages.map((page) => (
                            <Link key={page.path} href={page.url} className="suggestion-item">
                              <i className="tji-arrow-up-right"></i>
                              <span>{page.label}</span>
                              <span className="suggestion-type">{navigationT('pages')}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup-overlay"></div>
    </>
  );
};

export default HeaderSearchForm;
