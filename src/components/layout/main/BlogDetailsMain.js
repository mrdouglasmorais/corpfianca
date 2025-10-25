'use client';
import BlogDetailsPrimary from '@/components/sections/blogs/BlogDetailsPrimary';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import sliceText from '@/libs/sliceText';
import { useState } from 'react';
const BlogDetailsMain = ({ blogId }) => {
  const [title, setCurrentTitle] = useState('');
  return (
    <main>
      <HeroInner
        title={'Blog Details'}
        text={title ? sliceText(title, 31, true) : 'Blog Details'}
        breadcrums={[{ name: 'Notícias', path: '/noticias' }]}
      />
      <BlogDetailsPrimary setCurrentTitle={setCurrentTitle} blogId={blogId} />
      <Cta1 />
    </main>
  );
};

export default BlogDetailsMain;
