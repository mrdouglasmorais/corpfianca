'use client';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import RegisterPrimary from '@/components/sections/registration/RegisterPrimary';
import { useTranslations } from 'next-intl';

const RegisterMain = () => {
  const t = useTranslations('auth');
  return (
    <main>
      <HeroInner title={t('register')} text={t('register')} />
      <RegisterPrimary />
      <Cta1 />
    </main>
  );
};

export default RegisterMain;
