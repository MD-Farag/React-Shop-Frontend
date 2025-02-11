import React, { useState } from "react";
import { assets } from "../assets/assets";

import { Link } from "react-router-dom/cjs/react-router-dom";
import RadioBtnGroup from "../components/commonComp/RadioBtnGroup";

export const Checkout = () => {
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
					<img src={assets.shop} className="mr-4" alt="" />
					<img src={assets.rectangle} className="mr-4" alt="" />
					<img src={assets.activeShip} alt="" />
				</div>
				{/* ship & payment section */}
				<div className="">
					<h2 className="text-left mb-4 lg:mb-8 p-2 font-semibold text-base md:text-lg xl:text-xl">
						Shipping & Payment
					</h2>
					<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-7 items-start mb-4 lg:mb-8">
						<div className="xl:col-span-3">
							<div className="flex mb-5 lg:mb-10">
								<button
									type="submit"
									className="w-[130px] uppercase h-[50px] py-1.5 px-4 lg:py-2.5 lg:px-6 min-[375px]:py-3 bg-[#FBB03B] text-black rounded-full text-sm md:text-base xl:text-lg font-medium mr-4">
									Login
								</button>
								<button
									type="submit"
									className="uppercase  h-[50px] py-1.5 px-4 lg:py-2.5 lg:px-6 min-[375px]:py-3 text-black rounded-full text-sm md:text-base xl:text-lg font-medium border border-[#D8D8D8] w-[130px]">
									Sign up
								</button>
							</div>
							{/* Shipping section */}
							<form className="grid gap-4 min-[575px]:grid-cols-2 p-2">
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
								<input
									type="text"
									placeholder="Promo code"
									className="h-[50px] px-4 lg:px-8 rounded-full text-sm md:text-base focus:outline-none border border-[#D8D8D8]"
								/>
							</form>
						</div>
						{/* Payment & delivery section */}
						<div className="w-full xl:col-span-2 xl:mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-1 md:justify-between md:items-center md:text-center md:p-2 lg:px-6">
							{/* Payment section */}
							<div className="mb-4 lg:mb-6">
								<h3 className="text-left mb-2 lg:mb-4 p-2 font-medium text-sm md:text-base xl:text-lg">
									Payment method
								</h3>
								<div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-6">
									<RadioBtnGroup
										name="payMethod"
										items={payMethods}
										value={paymentMethod}
										onChange={setPaymentMethod}
									/>
								</div>
							</div>
							{/* delivery section */}
							<div className="mb-4 lg:mb-6">
								<h3 className="text-left mb-2 lg:mb-4 p-2 font-medium text-sm md:text-base xl:text-lg">
									Delivery method
								</h3>
								<div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-6">
									<RadioBtnGroup
										name="delMethod"
										items={delMethods}
										value={deliveryMethod}
										onChange={setDeliveryMethod}
									/>
								</div>
							</div>
						</div>
						{/* Cart summary section */}
						<div className="lg:max-xl:col-span-2 xl:col-span-2">
							<h3 className="text-left mb-2 lg:mb-4 p-2 font-medium text-sm md:text-base xl:text-lg">
								Your cart
							</h3>
							<div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 md:gap-4 mb-6">
								<div className="flex flex-col max-md:items-start md:grid md:items-center md:grid-cols-3 p-4 md:p-2 max-md:border border-[#f3f3f3] rounded-sm">
									<div className="md:col-span-5 xl:col-span-2 flex items-center max-md:order-2 max-md:mb-3">
										<img
											src={assets.item}
											className="mr-4 rounded-full w-[70px]"
											alt=""
										/>
										<p className="flex flex-col items-start text-left">
											<span className="font-semibold">
												T-shirt summer vibes
											</span>
											<span className="font-light text-[13px] text-[#c4c4c4]">
												#1234
											</span>
										</p>
									</div>
									<span className="md:max-xl:col-span-2 text-[14px] font-normal max-md:order-5 max-md:mb-3">
										$89.99
									</span>
								</div>
								<div className="flex flex-col max-md:items-start md:grid md:items-center md:grid-cols-3 p-4 md:p-2 max-md:border border-[#f3f3f3] rounded-sm">
									<div className="md:col-span-5 xl:col-span-2 flex items-center max-md:order-2 max-md:mb-3">
										<img
											src={assets.item}
											className="mr-4 rounded-full w-[70px]"
											alt=""
										/>
										<p className="flex flex-col items-start text-left">
											<span className="font-semibold">
												T-shirt summer vibes
											</span>
											<span className="font-light text-[13px] text-[#c4c4c4]">
												#1234
											</span>
										</p>
									</div>
									<span className="md:max-xl:col-span-2 text-[14px] font-normal max-md:order-5 max-md:mb-3">
										$89.99
									</span>
								</div>
							</div>
							<span className="flex items-center text-sm md:text-base xl:text-lg font-normal mb-6 min-[425px]:max-sm:text-left h-[50px] py-1.5 px-10 min-[575px]:px-5 sm:px-6 lg:py-2.5 lg:px-10 min-[375px]:py-3 bg-[#F1F1F1] text-black rounded-full w-fit mx-auto">
								Total cost: $159.85
							</span>
							{/* <div className="flex flex-col max-md:items-start md:grid md:items-center md:grid-cols-3 p-4 md:p-2 max-md:border border-[#f3f3f3] rounded-sm"> */}
							<div className="flex justify-center items-center max-md:order-2 max-md:mb-3">
								<img src={assets.ship} className="mr-4" alt="" />
								<p className="flex flex-col items-start text-left">
									<span className="text-sm text-center">
										You are <span className="font-medium">$30.02</span>away from
										free Shipping!
									</span>
								</p>
							</div>
							{/* </div> */}
						</div>
					</div>
					<form className="grid justify-center gap-4 sm:gap-0 min-[575px]:grid-cols-5 md:grid-cols-12 lg:grid-cols-11 justify-items-end mx-auto p-2 items-center">
						<Link
							to="/cart"
							type="submit"
							className="w-full min-[575px]:col-span-1 md:col-span-4 lg:col-span-5 flex items-center text-center py-1.5 lg:py-2.5 min-[375px]:py-3 text-black rounded-full text-sm md:text-base xl:text-lg font-medium">
							<img src={assets.backshop} className="mr-2" alt="" />
							Back
						</Link>
						<Link
							to="/"
							type="submit"
							className="uppercase min-[575px]:col-span-2 md:col-span-4 lg:col-span-3 h-[50px] py-1.5 px-11 min-[575px]:px-5 sm:px-6 lg:py-2.5 lg:px-10 min-[375px]:py-3 border border-[#D8D8D8] text-black rounded-full text-sm md:text-base xl:text-lg min-[575px]:max-w-[300px] flex-end font-medium">
							Continue Shopping
						</Link>
						<button
							type="submit"
							className="uppercase min-[575px]:col-span-2 md:col-span-4 lg:col-span-3 h-[50px] py-1.5 px-10 min-[575px]:px-5 sm:px-6 lg:py-2.5 lg:px-10 min-[375px]:py-3 bg-[#FBB03B] text-black rounded-full text-sm md:text-base xl:text-lg min-[575px]:max-w-[300px] justify-end font-medium">
							Proceed to payment
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
