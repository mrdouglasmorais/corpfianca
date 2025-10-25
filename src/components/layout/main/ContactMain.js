'use client';
import Contact5 from '@/components/sections/contacts/Contact5';
import ContactTop from '@/components/sections/contacts/ContactTop';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import { useTranslations } from 'next-intl';

const ContactMain = () => {
  const t = useTranslations('contact_page');
  return (
    <main>
      <HeroInner title={t('title')} text={t('title')} />
      <ContactTop />
      <Contact5 />
      <Cta1 />
    </main>
  );
};

export default ContactMain;
