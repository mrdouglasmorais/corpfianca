'use client';
import About11 from '@/components/sections/About/About11';
import Brands1 from '@/components/sections/brands/Brands1';
import Cta1 from '@/components/sections/cta/Cta1';
import Features from '@/components/sections/features/Features';
import Funfact3 from '@/components/sections/funfacts/Funfact3';
import HeroInner from '@/components/sections/heros/HeroInner';
import Skills1 from '@/components/sections/Skills/Skills1';
import Team8 from '@/components/sections/teams/Team8';
import Testimonials2 from '@/components/sections/testimonials/Testimonials2';
import { useTranslations } from 'next-intl';

const AboutMain = () => {
  const t = useTranslations('about');
  return (
    <main>
      <HeroInner title={t('title')} text={t('title')} />
      <About11 />
      <Features type={2} />
      <Funfact3 />
      <Team8 />
      <Skills1 />
      <Testimonials2 type={3} />
      <Brands1 />
      <Cta1 />
    </main>
  );
};

export default AboutMain;
