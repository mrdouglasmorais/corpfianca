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

        // Function to apply styles to GLightbox elements
        const applyGLightboxStyles = () => {
          const containers = document.querySelectorAll('.glightbox-container');
          const overlays = document.querySelectorAll('.goverlay');

          containers.forEach((el) => {
            if (el && el.style) {
              el.style.zIndex = '9999999';
              el.style.position = 'fixed';
              el.style.setProperty('z-index', '9999999', 'important');
            }
          });

          overlays.forEach((el) => {
            if (el && el.style) {
              el.style.zIndex = '9999998';
              el.style.setProperty('z-index', '9999998', 'important');
            }
          });
        };

        // Apply styles initially
        setTimeout(applyGLightboxStyles, 100);

        // Create MutationObserver to watch for GLightbox elements
        const observer = new MutationObserver(() => {
          const containers = document.querySelectorAll('.glightbox-container');
          const overlays = document.querySelectorAll('.goverlay');

          if (containers.length > 0 || overlays.length > 0) {
            applyGLightboxStyles();
          }
        });

        // Start observing
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // Store observer for cleanup
        lightboxRef.current.observer = observer;
      }
    });

    // Cleanup on unmount
    return () => {
      if (lightboxRef.current) {
        if (lightboxRef.current.observer) {
          lightboxRef.current.observer.disconnect();
        }
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  return children;
};

export default PopupVideo;
