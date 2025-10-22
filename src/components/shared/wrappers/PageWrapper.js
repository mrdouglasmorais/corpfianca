import Footer from "@/components/layout/footer/Footer";
import Footer10 from "@/components/layout/footer/Footer10";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer3 from "@/components/layout/footer/Footer3";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer5 from "@/components/layout/footer/Footer5";
import Footer6 from "@/components/layout/footer/Footer6";
import Footer7 from "@/components/layout/footer/Footer7";
import Footer8 from "@/components/layout/footer/Footer8";
import Footer9 from "@/components/layout/footer/Footer9";
import Header from "@/components/layout/header/Header";
import HeaderSearchForm from "@/components/layout/header/HeaderSearchForm";
import MobileMenu from "@/components/layout/header/MobileMenu";
import CartContextProvider from "@/context_api/CartContext";
import CurrentItemContextProvider from "@/context_api/CurrentItemContext";
import WishlistContextProvider from "@/context_api/WshlistContext";
import PreLoader from "../others/PreLoader";
import RtlMaker from "../others/RtlMaker";
import SmoothScroller from "../others/SmoothScroller";
import TjMagicCursor from "../others/TjMagicCursor";
import ClientWrapper from "./ClientWrapper";
import FooterStack from "./FooterStack";

const PageWrapper = ({
	children,
	isIndexPage,
	isInnerPage,
	isResumeBtn,
	headerType,
	isHeaderTop,
	topbarType,
	footerType,
	cursorType,
	currentItemId,
	isEcommerce,
	isRtl,
}) => {
	return (
		<div className={`${isEcommerce ? "ecommerce" : ""}`}>
			<RtlMaker isRtl={isRtl} />
			<PreLoader />
			<TjMagicCursor type={cursorType} />
			<HeaderSearchForm />
			<MobileMenu />
			<Header
				option={{
					isIndexPage,
					isInnerPage,
					headerType,
					isHeaderTop,
					topbarType,
					isResumeBtn,
				}}
			/>
			<Header
				isStickyHeader={true}
				option={{
					isIndexPage,
					isInnerPage,
					headerType,
					isHeaderTop,
					topbarType,
					isResumeBtn,
				}}
			/>
			{isEcommerce && (currentItemId || currentItemId === 0) ? (
				<CurrentItemContextProvider currentId={currentItemId}>
					<CartContextProvider>
						<WishlistContextProvider>
							{children ? children : ""}
						</WishlistContextProvider>
					</CartContextProvider>
				</CurrentItemContextProvider>
			) : isEcommerce ? (
				<CartContextProvider>
					<WishlistContextProvider>
						{children ? children : ""}
					</WishlistContextProvider>
				</CartContextProvider>
			) : currentItemId || currentItemId === 0 ? (
				<CurrentItemContextProvider currentId={currentItemId}>
					{children ? children : ""}
				</CurrentItemContextProvider>
			) : (
				children
			)}

			{!footerType ? (
				<FooterStack>
					<Footer isRtl={isRtl} footerType={footerType} />
				</FooterStack>
			) : footerType === 2 ? (
				<Footer2 />
			) : footerType === 3 ? (
				<Footer3 />
			) : footerType === 4 ? (
				<Footer4 />
			) : footerType === 5 ? (
				<Footer5 />
			) : footerType === 6 ? (
				<Footer6 />
			) : footerType === 7 ? (
				<Footer7 />
			) : footerType === 8 ? (
				<Footer8 />
			) : footerType === 9 ? (
				<Footer9 />
			) : footerType === 10 ? (
				<Footer10 />
			) : (
				<Footer isRtl={isRtl} footerType={footerType} />
			)}

			<ClientWrapper />
			<SmoothScroller />
		</div>
	);
};

export default PageWrapper;
