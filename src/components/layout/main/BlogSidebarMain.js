"use client";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const BlogSidebarMain = () => {
	return (
		<main>
			<HeroInner title={"Blog with sidebar"} text={"Blog with sidebar"} />
			<Blogs2 type={2} isSidebar={true} />
			<Cta1 />
		</main>
	);
};

export default BlogSidebarMain;
