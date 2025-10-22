import { getTranslations } from 'next-intl/server';
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "venobox/dist/venobox.min.css";
import "../assets/css/animate.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome-pro.min.css";
import "../assets/css/glightbox.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/odometer-theme-default.css";
import "../assets/css/solvior-icons.css";
import "../globals.css";

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: 'homepage' });

	return {
		title: t('title'),
		description: t('description'),
	};
}

export default function LocaleLayout({ children, params: { locale } }) {
	return children;
}
