"use client";
import Link from "next/link";

const Logo = ({ option, isStickyHeader }) => {
	const { isInnerPage, headerType, isIndexPage, isHeaderTop } = option;
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<img
					src={`/images/logos/${
						(headerType === 3 ||
							headerType === 4 ||
							headerType === 5 ||
							headerType === 6 ||
							headerType === 9) &&
						!isStickyHeader
							? "secondary-logo.png"
							: headerType === 9
							? "secondary-logo.png"
							: "primary-logo.png"
					}  `}
					alt="logo"
				/>
			</Link>
		</div>
	);
};

export default Logo;
