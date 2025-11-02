'use client';
import ClaimForm from '@/components/sections/quote/ClaimForm';
import HeroInner from '@/components/sections/heros/HeroInner';
import { useTranslations } from 'next-intl';

const ClaimMain = () => {
  const t = useTranslations('claim_page');
  const tHero = useTranslations('hero_inner');
  return (
    <main>
      <HeroInner title={t('title')} text={tHero('claim') || t('title')} />
      <ClaimForm />
    </main>
  );
};

export default ClaimMain;

