import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
// import RadioBtnGroup from "../components/commonComp/RadioBtnGroup";

export default function Cart() {
	const payMethods = [
		{
			value: "Paypal",
			label: assets.paypalLogo,
		},
		{
			value: "Visa",
			label: assets.visaLogo,
		},
		{
			value: "Discover",
			label: assets.discoverLogo,
		},
		{
			value: "Ideal",
			label: assets.idealLogo,
		},
	];

	const delMethods = [
		{
			value: "DHL",
			label: assets.dhlLogo,
		},
		{
			value: "DPD",
			label: assets.dpdLogo,
		},
		{
			value: "InpPost",
			label: assets.inpostLogo,
		},
	];

	const [paymentMethod, setPaymentMethod] = useState("Paypal");

	const [deliveryMethod, setDeliveryMethod] = useState("DHL");

	return (
		<div className="cart p-2">
			<div className="cart-items py-10">
				<div className="text-right mb-5 p-2 flex items-center justify-end">
					<img src={assets.activeShop} className="mr-4" />
					<img src={assets.rectangle} className="mr-4" />
					<img src={assets.ship} />
				</div>

				{/* cart section */}
				<div className="">
					<h2 className="text-left mb-4 lg:mb-8 p-2 font-bold text-base md:text-lg xl:text-xl">
						Shopping Cart
					</h2>
					<div className="hidden md:grid md:justify-between md:items-center md:grid-cols-12 xl:grid-cols-7 md:text-center md:mb-6 md:p-2">
						<span className="md:col-span-5 xl:col-span-2 text-left text-[#c4c4c4]">
							Product
						</span>
						<span className="text-[14px] font-normal text-[#c4c4c4]">Color</span>
						<span className="text-[14px] font-normal text-[#c4c4c4]">Size</span>
						<span className="md:max-xl:col-span-2 text-[14px] font-normal text-[#c4c4c4]">
							Amount
						</span>
						<span className="md:max-xl:col-span-2 text-[14px] font-normal text-[#c4c4c4]">
							Price
						</span>
					</div>
					<div className="grid gap-2 sm:max-md:grid-cols-2 md:gap-4 mb-4 lg:mb-8 ">
						<div className="flex flex-col max-md:items-start md:grid md:items-center md:grid-cols-12 xl:grid-cols-7 p-4 md:p-2 max-md:border border-[#f3f3f3] rounded-sm">
							<div className="md:col-span-5 xl:col-span-2 flex items-center max-md:order-2 max-md:mb-3">
								<img src={assets.item} className="mr-4 rounded-full w-[70px]" />
								<p className="flex flex-col items-start text-left">
									<span className="font-semibold">T-shirt summer vibes</span>
									<span className="font-light text-[13px] text-[#c4c4c4]">
										#1234
									</span>
								</p>
							</div>
							<span className="text-[14px] font-normal max-md:order-3 max-md:mb-3">
								White
							</span>
							<span className="text-[14px] font-normal max-md:order-4 max-md:mb-3">
								XL
							</span>
							<div className="md:max-xl:col-span-2 border border-[#D8D8D8] py-2 px-4 lg:px-6 rounded-full w-fit md:mx-auto max-md:order-6">
								<button className="mr-6">-</button>
								<span className="text-base">1</span>
								<button className="ml-6">+</button>
							</div>
							<span className="md:max-xl:col-span-2 text-[14px] font-normal max-md:order-5 max-md:mb-3">
								$89.99
							</span>
							<img
								className="ml-auto cursor-pointer max-md:order-1 max-md:mb-3"
								src={assets.closeBtn}
							/>
						</div>
					</div>
					<form className="grid max-sm:gap-4 min-[425px]:grid-cols-2 mx-auto p-4 sm:p-2 min-[500px]:max-sm:px-8 sm:flex sm:items-baseline max-sm:items-center sm:flex-row sm:justify-between items-center">
						<Link
							to="/"
							type="submit"
							className="flex items-center text-center py-1.5 lg:py-2.5 min-[375px]:py-3 text-black rounded-full text-sm md:text-base xl:text-lg sm:max-md:w-[175px]">
							<img src={assets.backshop} className="mr-2" /> Continue Shopping
						</Link>
						<input
							type="text"
							placeholder="Promo code"
							className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8] sm:max-md:w-[150px]"
						/>
						<span className="text-sm md:text-base xl:text-lg font-normal mb-3 sm:max-md:w-[160px] min-[425px]:max-sm:text-left">
							Total cost: $185.99
						</span>
						<Link
							to="/checkout"
							type="submit"
							className="uppercase h-[50px] py-1.5 px-4 lg:py-2.5 lg:px-6 min-[375px]:py-3 bg-[#FBB03B] text-black rounded-full text-sm md:text-base xl:text-lg">
							Checkout
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}
