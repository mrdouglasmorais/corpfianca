"use client";

import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain
				title={"Algo deu errado!"}
				text={"Ocorreu um erro inesperado. Tente novamente."}
				onRetry={reset}
				showCta={false}
			/>
		</PageWrapper>
	);
}
