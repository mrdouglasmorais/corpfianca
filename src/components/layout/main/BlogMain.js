'use client';
import BlogsPrimary from '@/components/sections/blogs/BlogsPrimary';
import Cta1 from '@/components/sections/cta/Cta1';
import HeroInner from '@/components/sections/heros/HeroInner';
import filterItems from '@/libs/filterItems';
import getBlogs from '@/libs/getBlogs';
import makeText from '@/libs/makeText';
import { translateCategory, translateTag } from '@/utils/translateTags';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const BlogMain = () => {
  const t = useTranslations('blogs_section');
  const tCommon = useTranslations('common');
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

  // Translate category or tag
  const getTranslatedTitle = () => {
    if (category) {
      return translateCategory(makeText(category, true), tCommon);
    }
    if (tag) {
      return translateTag(makeText(tag, true), tCommon);
    }
    if (author_role) {
      return author_role;
    }
    if (search) {
      return makeText(search, true);
    }
    return t('blog_standard');
  };

  const translatedTitle = getTranslatedTitle();

  return (
    <main>
      <HeroInner
        title={translatedTitle}
        text={translatedTitle}
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
