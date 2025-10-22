"use client";

import { useEffect, useState } from "react";

const PreLoader = ({ isDefaultPreLoader }) => {
	const [isShowUi, setIshowUi] = useState(false);
	useEffect(() => {
		if (isDefaultPreLoader) {
			setIshowUi(null);
		} else {
			setIshowUi(true);
		}
	}, [isDefaultPreLoader]);
	return (
		<div
			className="preloader"
			style={{
				opacity: isShowUi ? 0 : 1,
				transition: "all 0.3s linear",
				display: isShowUi === null ? "none" : "",
				zIndex: isShowUi ? -99999 : 99999,
			}}
		>
			<div className="loading-container">
				<div className="loading"></div>
				<div id="loading-icon">
					<img src="/images/loader.svg" alt="loader" />
				</div>
			</div>
		</div>
	);
};

export default PreLoader;
