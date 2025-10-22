"use client";

import { useEffect } from "react";

const RtlMaker = ({ isRtl }) => {
	useEffect(() => {
		const html = document.documentElement;
		html.setAttribute("dir", "ltr");
		html.setAttribute("lang", "en");
		if (isRtl) {
			html.setAttribute("dir", "rtl");
			html.setAttribute("lang", "ar");
		}
	}, [isRtl]);
	return null;
};

export default RtlMaker;
