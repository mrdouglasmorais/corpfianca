import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Lato, Libre_Franklin } from "next/font/google";
import "./globals.css";

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	variable: "--font-lato",
});

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-libre-franklin",
});

export const metadata = {
	title: "CorpFinance - Corporate Solutions",
	description: "Leading corporate finance solutions"
};

export default async function LocaleLayout({ children, params }) {
	const locale = (await params).locale;
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			data-scroll-behavior="smooth"
			className={`${lato.variable} ${libreFranklin.variable}`}
		>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
