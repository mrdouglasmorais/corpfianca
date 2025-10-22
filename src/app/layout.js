import { Lato, Libre_Franklin } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "venobox/dist/venobox.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/solvior-icons.css";
import "./globals.css";
export const metadata = {
	title: "CorpFiança - Plataforma Corporativa de Confiança e Soluções Empresariais",
	description: "CorpFiança - Sua plataforma completa para soluções corporativas, consultoria empresarial e serviços de confiança para o crescimento do seu negócio.",
};

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	variable: "--font-lato", // optional: set a CSS variable
});

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-libre-franklin",
});
export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${lato.variable} ${libreFranklin.variable}`}
		>
			<body> {children}</body>
		</html>
	);
}
