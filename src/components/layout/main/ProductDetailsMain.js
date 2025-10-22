"use client";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ProductDetailsPrimary from "@/components/sections/shop/ProductDetailsPrimary";
import sliceText from "@/libs/sliceText";
import { useState } from "react";

const ProductDetailsMain = () => {
	const [title, setCurrentTitle] = useState("Shop details");
	return (
		<main>
			<HeroInner
				title={sliceText(title, 31, true)}
				text={title}
				breadcrums={[{ name: "Products", path: "/shop" }]}
			/>
			<ProductDetailsPrimary setCurrentTitle={setCurrentTitle} />
			<Cta1 />
		</main>
	);
};

export default ProductDetailsMain;
