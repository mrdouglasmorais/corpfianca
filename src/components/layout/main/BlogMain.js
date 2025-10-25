'use client';
import BlogsPrimary from '@/components/sections/blogs/BlogsPrimary';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import filterItems from '@/libs/filterItems';
import getBlogs from '@/libs/getBlogs';
import makeText from '@/libs/makeText';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const BlogMain = () => {
  const t = useTranslations('blogs_section');
  const allItems = getBlogs();
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') || null;
  const tag = searchParams?.get('tag') || null;
  const author_role = searchParams?.get('author_role') || null;
  const search = searchParams?.get('search') || null;
  // Filter Items
  const filteredItems = filterItems(
    allItems,
    category ? 'category' : tag ? 'tags' : author_role ? 'role' : search ? 'search' : '',
    category ? category : tag ? tag : author_role ? author_role : search ? search : '',
  );

  return (
    <main>
      <HeroInner
        title={
          category
            ? makeText(category, true)
            : tag
              ? makeText(tag, true)
              : author_role
                ? author_role
                : search
                  ? makeText(search, true)
                  : t('blog_standard')
        }
        text={
          category
            ? `${makeText(category, true)}`
            : tag
              ? ` ${makeText(tag, true)}`
              : author_role
                ? `${author_role}`
                : search
                  ? `${makeText(search, true)}`
                  : t('blog_standard')
        }
        breadcrums={
          category || tag || author_role || search ? [{ name: t('blogs'), path: '/noticias' }] : []
        }
      />
      <BlogsPrimary filteredItems={filteredItems} />
      <Cta1 />
    </main>
  );
};

export default BlogMain;
