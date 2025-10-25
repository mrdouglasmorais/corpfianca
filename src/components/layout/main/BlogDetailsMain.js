'use client';
import BlogDetailsPrimary from '@/components/sections/blogs/BlogDetailsPrimary';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import sliceText from '@/libs/sliceText';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const BlogDetailsMain = ({ blogId }) => {
  const t = useTranslations('blogs_section');
  const [title, setCurrentTitle] = useState('');
  return (
    <main>
      <HeroInner
        title={title ? sliceText(title, 31, true) : t('blog_standard')}
        text={title ? sliceText(title, 31, true) : t('blog_standard')}
        breadcrums={[{ name: t('blogs'), path: '/noticias' }]}
      />
      <BlogDetailsPrimary setCurrentTitle={setCurrentTitle} blogId={blogId} />
      <Cta1 />
    </main>
  );
};

export default BlogDetailsMain;
