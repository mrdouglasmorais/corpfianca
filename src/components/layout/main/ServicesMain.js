"use client";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import { useTranslations } from "next-intl";

const ServicesMain = () => {
	const t = useTranslations('navigation');
	return (
		<main>
			<HeroInner title={t('services')} text={t('services')} />
			<ServicesPrimary />
			<Cta1 />
		</main>
	);
};

export default ServicesMain;
