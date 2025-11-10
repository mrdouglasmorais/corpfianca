import blogs from '../../public/fakedata/blogs.json';
import { createSlug } from '@/utils/slugUtils';

const getBlogs = () => {
  return blogs.map((blog) => ({
    ...blog,
    slug: blog.slug || createSlug(blog.title),
  }));
};

export default getBlogs;
