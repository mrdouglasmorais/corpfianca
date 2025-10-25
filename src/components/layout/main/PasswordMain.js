'use client';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import PasswordPrimary from '@/components/sections/registration/PasswordPrimary';
import { useTranslations } from 'next-intl';

const PasswordMain = () => {
  const t = useTranslations('auth');
  return (
    <main>
      <HeroInner title={t('password')} text={t('password')} />
      <PasswordPrimary />
      <Cta1 />
    </main>
  );
};

export default PasswordMain;
