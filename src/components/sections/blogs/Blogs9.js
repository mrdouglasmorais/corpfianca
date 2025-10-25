'use client';
import BlogCard9 from '@/components/shared/cards/BlogCard9';
import getBlogs from '@/libs/getBlogs';
import { useTranslations } from 'next-intl';

const Blogs9 = () => {
	const t = useTranslations('blogs_section');
	const blogs = getBlogs().slice(0, 3);

	return (
		<section className="h9-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								{t('subtitle')}
							</span>
							<h2 className="sec-title text-anim">
								{t('title')}
							</h2>
						</div>

						<div className="h9-blog-wrapper">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard9 key={idx} blog={blog} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs9;
