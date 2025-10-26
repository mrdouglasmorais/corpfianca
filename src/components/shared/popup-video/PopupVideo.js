'use client';

import { useEffect, useRef } from 'react';

const PopupVideo = ({ children }) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    // Cleanup previous instance if exists
    if (lightboxRef.current) {
      lightboxRef.current.destroy();
      lightboxRef.current = null;
    }

    // Import and initialize GLightbox
    import('glightbox').then(({ default: GLightbox }) => {
      if (!lightboxRef.current) {
        lightboxRef.current = GLightbox({
          selector: '.glightbox',
          loop: true,
          autoplayVideos: true,
          openEffect: 'fade',
        });

        // Force high z-index via inline styles after initialization
        setTimeout(() => {
          const lightboxContainers = document.querySelectorAll('.glightbox-container');
          const overlays = document.querySelectorAll('.goverlay');
          
          lightboxContainers.forEach((el) => {
            el.style.zIndex = '9999999';
            el.style.position = 'fixed';
          });
          
          overlays.forEach((el) => {
            el.style.zIndex = '9999998';
          });
        }, 100);
      }
    });

    // Cleanup on unmount
    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  return children;
};

export default PopupVideo;
