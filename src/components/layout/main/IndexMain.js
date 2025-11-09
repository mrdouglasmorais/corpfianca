import About1 from '@/components/sections/About/About1';
import Blogs1 from '@/components/sections/blogs/Blogs1';
import Features from '@/components/sections/features/Features';
import Funfact1 from '@/components/sections/funfacts/Funfact1';
import Hero from '@/components/sections/heros/Hero';
import Services1 from '@/components/sections/services/Services1';
import Skills1 from '@/components/sections/Skills/Skills1';
// import Testimonials1 from '@/components/sections/testimonials/Testimonials1';

const IndexMain = () => {
  return (
    <main>
      <Hero />
      <Features />
      <About1 />
      <Services1 />
      <Funfact1 />
      <Skills1 />
      {/* <Testimonials1 /> */}
      <Blogs1 />
    </main>
  );
};

export default IndexMain;
