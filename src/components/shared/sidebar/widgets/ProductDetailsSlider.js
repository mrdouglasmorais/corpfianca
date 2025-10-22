"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopupImage from "../../modals/PopupImage";

const ProductDetailsSlider = ({ items = [], currentItem = {} }) => {
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const [currentDirection, setCurrentDirection] = useState("vertical");
	const { isRtl } = {};
	const {
		id,
		title,
		price,
		img,
		status,
		category,
		previousPrice,
		reviews,
		sizes,
		colors,
	} = currentItem;
	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
		};

		getDirection(); // ✅ run on mount
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);

	return (
		<div className="tj-product-details-thumb-wrapper d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between">
			<div className="tj-product-thumb-items  order-2 order-md-1">
				<Swiper
					key={currentDirection}
					onSwiper={setControlledMainSwiper} // capture thumbs swiper
					slidesPerView={4}
					spaceBetween={10}
					freeMode
					watchSlidesProgress
					slideToClickedSlide
					direction={currentDirection}
					grabCursor={true}
					breakpoints={{
						768: { spaceBetween: 15 },
					}}
					dir={`${isRtl ? "rtl" : "ltr"}`}
					modules={[Thumbs]}
				>
					{items.map(({ img = "/images/product/product-1.webp" }, idx) => (
						<SwiperSlide key={idx}>
							<div className="tj-pdt-thumb-img">
								{" "}
								<img src={img} alt="images" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="tj-product-img-wrap order-1 order-md-2">
				{status ? (
					<div className="tj-product-badge product-on-sale">
						<span className={`onsale ${status === "Sold" ? "sold-out" : ""}`}>
							{status}
						</span>
					</div>
				) : (
					""
				)}

				<div className="tj-product-action-btn">
					{items.map(({ img = "/images/product/product-1.webp" }, idx) => (
						<PopupImage key={idx}>
							<Link
								className="ig-gallery glightbox-img"
								data-gall="gallery01"
								href={img}
							>
								<i className="tji-search"></i>
							</Link>
						</PopupImage>
					))}
				</div>
				<Swiper
					key={currentDirection}
					slidesPerView={1}
					loop
					speed={500}
					autoplay={{ delay: 5000 }}
					modules={[Thumbs]}
					dir={`${isRtl ? "rtl" : "ltr"}`}
					thumbs={{ swiper: controlledMainSwiper }}
				>
					{items.map(({ img = "/images/product/product-1.webp" }, idx) => (
						<SwiperSlide key={idx}>
							<div className="product-img-area">
								<div className="product-img">
									<img src={img} alt="" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Thumbs Slider */}
		</div>
	);
};

export default ProductDetailsSlider;
