"use client";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import { useTranslations } from "next-intl";
import { useState } from "react";

const ServiceDetailsMain = ({ serviceId }) => {
	const t = useTranslations('navigation');
	const [title, setCurrentTitle] = useState("");
	return (
		<main>
			<HeroInner
				title={title ? title : t('services')}
				text={title ? title : t('services')}
				breadcrums={[{ name: t('services'), path: "/services" }]}
			/>
			<ServicesDetailsPrimary setCurrentTitle={setCurrentTitle} serviceId={serviceId} />
			<Cta1 />
		</main>
	);
};

export default ServiceDetailsMain;
