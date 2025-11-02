import { Lato, Libre_Franklin } from 'next/font/google';
import './[locale]/globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-libre-franklin',
});

export const metadata = {
  title: 'Corp Fiança - Corporate Solutions',
  description: 'Leading corporate finance solutions',
  icons: {
    icon: '/images/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      data-scroll-behavior="smooth"
      className={`${lato.variable} ${libreFranklin.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
