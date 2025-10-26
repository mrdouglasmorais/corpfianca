"use client";

import { useEffect, useRef } from "react";

const PopupVideo = ({ children }) => {
	const lightboxRef = useRef(null);

	useEffect(() => {
		// Cleanup previous instance if exists
		if (lightboxRef.current) {
			lightboxRef.current.destroy();
			lightboxRef.current = null;
		}

		// Import and initialize GLightbox
		import("glightbox").then(({ default: GLightbox }) => {
			if (!lightboxRef.current) {
				lightboxRef.current = GLightbox({
					selector: ".glightbox",
					loop: true,
					autoplayVideos: true,
				});
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
