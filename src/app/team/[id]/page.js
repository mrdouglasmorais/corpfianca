import TeamDetailsMain from "@/components/layout/main/TeamDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getTeamMembers from "@/libs/getTeamMembers";
import { notFound } from "next/navigation";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const items = getTeamMembers();
export default async function TeamDetails({ params }) {
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
			<TeamDetailsMain teamId={parseInt(id)} />
		</PageWrapper>
	);
}
// export async function generateStaticParams() {
// 	return items?.map(({ id }) => ({ id: id.toString() }));
// }
