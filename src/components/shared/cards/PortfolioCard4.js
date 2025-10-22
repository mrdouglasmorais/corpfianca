"use client";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const PortfolioCard4 = ({
	portfolio,
	handleCurrentIndex,
	currentIndex,
	idx,
}) => {
	const { title, img2, id, tags } = portfolio ? portfolio : {};
	return (
		<div
			className={`case-item ${currentIndex === idx ? "active" : ""}`}
			onClick={() => handleCurrentIndex(idx)}
		>
			<div className="header">
				<span>
					<span className="number">{modifyNumber(idx + 1)}.</span> {title}
				</span>
				<span className={`icon ${currentIndex === idx ? "active" : ""}`}>
					<i className="tji-arrow-bown"></i>
				</span>
			</div>
			<div className="content slider-drag">
				<Link href={`/portfolios/${id}`} className="view-project">
					<img
						src={img2 ? img2 : "assets/images/project/h2-project-1.webp"}
						alt="Project Image"
					/>{" "}
				</Link>
			</div>
		</div>
	);
};

export default PortfolioCard4;
