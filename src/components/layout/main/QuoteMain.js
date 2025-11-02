'use client';
import QuoteForm from '@/components/sections/quote/QuoteForm';
import HeroInner from '@/components/sections/heros/HeroInner';
import { useTranslations } from 'next-intl';

const QuoteMain = () => {
  const t = useTranslations('quote_page');
  const tHero = useTranslations('hero_inner');
  return (
    <main>
      <HeroInner title={t('quote_title')} text={tHero('quote') || t('quote_title')} />
      <QuoteForm />
    </main>
  );
};

export default QuoteMain;

