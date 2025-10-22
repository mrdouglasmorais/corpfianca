import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function NotFound() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain
				title={"404"}
				text={"Página não encontrada. A página que você está procurando não existe."}
			/>
		</PageWrapper>
	);
}
