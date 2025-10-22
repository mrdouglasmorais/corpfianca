"use client";

import meanmenu from "@/libs/meanmenu";
import { useEffect, useState } from "react";
const useHeaderFunction = isStickyHeader => {
	const [isSticky, setIsSticky] = useState(false);
	useEffect(() => {
		let destroy;
		// mobile menu related
		if (!isStickyHeader) {
			destroy = meanmenu("#main-menu", {
				meanMenuContainer: ".mobile_menu",
				meanScreenWidth: "991",
				meanExpand: ['<i class="tji-angle-down"></i>'],
			});
		}

		// Handlers
		const openMenu = () => {
			document.querySelector(".hamburger-area")?.classList.add("opened");
			document.querySelector(".body-overlay")?.classList.add("opened");
		};

		const closeMenu = () => {
			document.querySelector(".hamburger-area")?.classList.remove("opened");
			document.querySelector(".body-overlay")?.classList.remove("opened");
		};

		const overlayClose = e => {
			document.querySelector(".hamburger-area")?.classList.remove("opened");
			e.currentTarget.classList.remove("opened");
		};

		const openSearch = () => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.add("search-opened"));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(el => el.classList.add("opened"));
		};

		const closeSearch = () => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.remove("search-opened"));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(el => el.classList.remove("opened"));
		};

		const overlaySearchClose = e => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.remove("search-opened"));
			e.currentTarget.classList.remove("opened");
		};

		// Attach
		document
			.querySelectorAll(".menu_btn")
			.forEach(btn => btn.addEventListener("click", openMenu));
		document
			.querySelectorAll(".hamburgerCloseBtn")
			.forEach(btn => btn.addEventListener("click", closeMenu));
		document
			.querySelectorAll(".body-overlay")
			.forEach(overlay => overlay.addEventListener("click", overlayClose));
		document
			.querySelectorAll(".header_search")
			.forEach(button => button.addEventListener("click", openSearch));
		document
			.querySelectorAll(".search_close_btn")
			.forEach(button => button.addEventListener("click", closeSearch));
		document
			.querySelectorAll(".search-popup-overlay")
			.forEach(overlay =>
				overlay.addEventListener("click", overlaySearchClose)
			);

		// Cleanup
		return () => {
			if (!isStickyHeader && destroy) destroy();

			document
				.querySelectorAll(".menu_btn")
				.forEach(btn => btn.removeEventListener("click", openMenu));
			document
				.querySelectorAll(".hamburgerCloseBtn")
				.forEach(btn => btn.removeEventListener("click", closeMenu));
			document
				.querySelectorAll(".body-overlay")
				.forEach(overlay => overlay.removeEventListener("click", overlayClose));
			document
				.querySelectorAll(".header_search")
				.forEach(button => button.removeEventListener("click", openSearch));
			document
				.querySelectorAll(".search_close_btn")
				.forEach(button => button.removeEventListener("click", closeSearch));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(overlay =>
					overlay.removeEventListener("click", overlaySearchClose)
				);
		};
	}, [isStickyHeader]);

	// sticky header related
	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = () => {
			const st = window.scrollY;
			if (st > 500) {
				if (st > lastScrollTop) {
					// Scrolling down → remove sticky
					setIsSticky(false);
				} else {
					// Scrolling up → add sticky
					setIsSticky(true);
				}
			} else {
				// Reset when near top
				setIsSticky(false);
			}
			lastScrollTop = st;
		};
		if (isStickyHeader) {
			handleScroll();
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (isStickyHeader) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return isSticky;
};

export default useHeaderFunction;
