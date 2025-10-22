"use client";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import { useState } from "react";

const PortfolioDetailsMain = ({ portfolioId }) => {
	const [title, setCurrentTitle] = useState("");
	return (
		<main>
			<HeroInner
				title={title ? title : "Portfolio details"}
				text={title ? title : "Portfolio details"}
				breadcrums={[{ name: "Portfolios", path: "/portfolios" }]}
			/>
			<PortfolioDetailsPrimary setCurrentTitle={setCurrentTitle} portfolioId={portfolioId} />
			<Cta1 />
		</main>
	);
};

export default PortfolioDetailsMain;
