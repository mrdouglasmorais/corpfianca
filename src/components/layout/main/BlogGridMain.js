"use client";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const BlogGridMain = () => {
	return (
		<main>
			<HeroInner title={"Blog grid"} text={"Blog grid"} />
			<Blogs2 type={2} />
			<Cta1 />
		</main>
	);
};

export default BlogGridMain;
