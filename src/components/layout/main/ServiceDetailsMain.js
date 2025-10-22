"use client";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import { useState } from "react";

const ServiceDetailsMain = () => {
	const [title, setCurrentTitle] = useState("");
	return (
		<main>
			<HeroInner
				title={title ? title : "Service details"}
				text={title ? title : "Service details"}
				breadcrums={[{ name: "Services", path: "/services" }]}
			/>
			<ServicesDetailsPrimary setCurrentTitle={setCurrentTitle} />
			<Cta1 />
		</main>
	);
};

export default ServiceDetailsMain;
