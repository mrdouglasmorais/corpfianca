import PortfolioDetailsMain from "@/components/layout/main/PortfolioDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const items = getPortfolio();
export default async function PortfolioDetails({ params }) {
	const { id } = await params;

	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<PageWrapper
			isHeaderTop={true}
			footerType={"inner"}
			currentItemId={parseInt(id)}
		>
			<PortfolioDetailsMain portfolioId={parseInt(id)} />
		</PageWrapper>
	);
}
// export async function generateStaticParams() {
// 	return items?.map(({ id }) => ({ id: id.toString() }));
// }
