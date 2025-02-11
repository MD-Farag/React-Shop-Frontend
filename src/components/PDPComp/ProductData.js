import React, { useState } from "react";
import { assets } from "../../assets/assets";
import SaleMark from "../commonComp/SaleMark";

const ProductData = ({ item }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (e, id) => {
		// e.preventDefault()
		// console.log(e.target, item)
		if (!cartItems[id]) {
			setCartItems((prev) => [...prev, item]);
		} else {
			alert("this item is already in cart");
			setCartItems((prev) => [...prev]);
		}
		console.log("item added to cart with id= ", id);
		console.log("item is", item);
		console.log("all items are: ", cartItems);
	};

	return (
		<div>
			<div className="flex justify-between sm:grid-cols-2  sm-max-lg:justify-items-center mb-4 lg:mb-6">
				<div className="flex items-center mb-4 text-left">
					<img src={assets.standard} alt="shipping" className="h-[20px] mr-4" />
					<div>
						<h3 className="text-black text-sm">Standard shipment</h3>
						<p className="text-[#808080] font-light text-sm">
							Free within 3-6 work days
						</p>
					</div>
				</div>
				<div className="flex items-center mb-4 text-left">
					<img src={assets.express} alt="shipping" className="h-[20px] mr-4" />
					<div>
						<h3 className="text-black text-sm">Express delivery</h3>
						<p className="text-[#808080] font-light text-sm">$35,00 available</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between mb-4">
				{item.sale ? (
					<SaleMark position="" left="" top="" save={item.sale} />
				) : (
					<span></span>
				)}
				<div className="flex flex-col items-end text-[#CECECE]">
					<span>Product ID:</span>
					<span>{item.id}</span>
				</div>
			</div>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl lg:text-2xl 2xl:text-3xl font-light">{item.name}</h2>
			</div>
			<div className="flex flex-col min-[375px]:flex-row min-[375px]:items-center justify-between mb-6 md:mb-8 xl:mb-10">
				<div className="flex items-end text-[#CECECE] max-[374px]:mb-4">
					<span className="mr-10 text-xl lg:text-2xl 2xl:text-3xl font-light text-[#FF0000]">
						${item.aftrPrice}
					</span>
					{item.bfrPrice && (
						<span className="text-xl lg:text-2xl 2xl:text-3xl font-light line-through">
							${item.bfrPrice}
						</span>
					)}
				</div>
				<span className="capitalize">{item.brand}</span>
			</div>
			<div className="mb-6 lg:mb-8 2xl:mb-10 text-left">
				<span className="block mb-6">Color:</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="bg-black h-6 w-6 block border border-[#E6E6E6"></span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="bg-[#FFE3B7] h-6 w-6 block border border-[#E6E6E6"></span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="bg-[#2900FF] h-6 w-6 block border border-[#E6E6E6"></span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="bg-white h-6 w-6 block border border-[#E6E6E6"></span>
				</span>
			</div>
			<div className="mb-6 lg:mb-8 2xl:mb-10 text-left">
				<span className="block mb-6">Size:</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="h-6 w-6 block text-center">XS</span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer max-[374px]:mb-3">
					<span className="h-6 w-6 block text-center">S</span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="h-6 w-6 block text-center">M</span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="h-6 w-6 block text-center">L</span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="h-6 w-6 block text-center">XL</span>
				</span>
				<span className="p-2 border inline-block mr-3 cursor-pointer">
					<span className="h-6 w-6 block text-center">XXL</span>
				</span>
			</div>
			<div className="mb-6 lg:mb-8 2xl:mb-10 text-left">
				<span className="block mb-6">Quantity:</span>
				<div className="flex">
					<div className="border border-[#D8D8D8] py-3 px-6 rounded-full mr-6">
						<button className="mr-6">-</button>
						<span className="mr-6">1</span>
						<button>+</button>
					</div>
					<button
						onClick={(e) => addToCart(e, item.id)}
						className="mr-6 py-3 px-6 bg-[#FBB03B] rounded-full">
						ADD TO CART
					</button>
					<button className="rounded-full border border-[#D8D8D8] w-[50px] h-[50px] text-[10px]">
						{/* <img src={favIcon} alt='fav icon' className='w-[17px[ h-[17px] m-auto' /> */}
						favicon
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductData;
