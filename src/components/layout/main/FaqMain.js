'use client';
import Contact4 from "@/components/sections/contacts/Contact4";
import Cta1 from "@/components/sections/cta/Cta1";
import Faq3 from "@/components/sections/faq/Faq3";
import HeroInner from "@/components/sections/heros/HeroInner";
import { useTranslations } from 'next-intl';

const FaqMain = () => {
	const t = useTranslations('navigation');
	const tHero = useTranslations('hero_inner');

	return (
		<main>
			<HeroInner title={t('faq')} text={tHero('faq') || t('faq')} />
			<Contact4 />
			<Faq3 />
			<Cta1 />
		</main>
	);
};

export default FaqMain;
