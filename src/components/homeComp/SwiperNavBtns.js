import React from "react";

import { assets } from "../../assets/assets";

const SwiperNavBtns = () => {
	return (
		<>
			<div
				className={`image-swiper-button-next absolute right-[75px] top-[83%] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] 2xl:w-[70px] 2xl:h-[70px] z-10 flex items-center justify-center rounded-tr-lg rounded-br-lg1 `}></div>
			<div className="image-swiper-button-prev absolute right-[130px] lg:right-[145px] xl:right-[160px] 2xl:right-[165px] top-[83%] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] 2xl:w-[70px] 2xl:h-[70px] z-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg"></div>
		</>
	);
};

export default SwiperNavBtns;
