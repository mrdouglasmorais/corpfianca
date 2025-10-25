'use client';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import LoginPrimary from '@/components/sections/registration/LoginPrimary';
import { useTranslations } from 'next-intl';

const LoginMain = () => {
  const t = useTranslations('auth');
  return (
    <main>
      <HeroInner title={t('login')} text={t('login')} />
      <LoginPrimary />
      <Cta1 />
    </main>
  );
};

export default LoginMain;
