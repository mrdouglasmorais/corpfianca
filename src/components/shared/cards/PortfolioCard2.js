import Link from "next/link";

const PortfolioCard2 = ({ portfolio, idx }) => {
	const { title, img2, id, tags } = portfolio ? portfolio : {};
	return (
		<div
			className="project-style-2 wow fadeInUp"
			data-wow-delay={`0.${idx + 1 + idx}s`}
		>
			<div className="project-images">
				<img
					src={img2 ? img2 : "/images/project/h2-project-1.webp"}
					alt="Images"
				/>
				<Link href={`/portfolios/${id}`}>View Project</Link>
			</div>
			<div className="project-content">
				<h4 className="title">
					<Link href={`/portfolios/${id}`}> {title}</Link>
				</h4>
				<div className="project-category">
					<ul>
						{tags?.length
							? tags?.map((tag, idx) => (
									<li key={idx + 11}>
										<Link key={100 + idx} href={`/portfolios`}>
											{tag}
										</Link>
									</li>
							  ))
							: ""}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard2;
