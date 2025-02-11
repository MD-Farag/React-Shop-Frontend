import React, { useState, useMemo, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; // Assuming a custom hook for fetching data
import Accordion from "../components/commonComp/Accordion";
import PriceFilter from "../components/commonComp/PriceFilter";

const ProductGrid = React.lazy(() => import("../components/commonComp/ProductGrid"));

const Category = () => {
	const location = useLocation();
	const API_URL = process.env.REACT_APP_BACKEND_URL;

	// API endpoint based on URL
	const itemUrl = useMemo(
		() => `${API_URL}/api${location.pathname.substring(9)}`,
		[location.pathname, API_URL]
	);

	// Fetch products data using custom hook
	const { data: products, isPending, error } = useFetch(itemUrl);
	//  State to store selected categories
	const [selectedCategories, setSelectedCategories] = useState([]);
	//  State to store selected price range (initially [0, 1000])
	const [priceRange, setPriceRange] = useState([0, 1000]);
	//  State to store selected sizes
	const [selectedSizes, setSelectedSizes] = useState([]);
	//  State to store selected colors
	const [selectedColors, setSelectedColors] = useState([]);

	// Reset filters when category changes
	useEffect(() => {
		setSelectedCategories([]);
		setPriceRange([0, 1000]);
		setSelectedSizes([]);
		setSelectedColors([]);
	}, [location.pathname]); // Runs every time category (URL path) changes

	// Handle filter changes
	// const handlCategoryChange = (category) => {
	// 	setSelectedCategories((prev) =>
	// 		prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
	// 	);
	// };
	const handlePriceChange = (newPriceRange) => {
		setPriceRange(newPriceRange);
	};
	// const handleSelectedSizes = (size) => {
	// 	setSelectedSizes((prev) =>
	// 		prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
	// 	);
	// };
	// const handleSelectedColors = (color) => {
	// 	setSelectedColors((prev) =>
	// 		prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
	// 	);
	// };

	// 5️⃣ Filter products based on price range (assuming products have a `price` field)
	const filteredProducts = useMemo(() => {
		if (!products) return [];
		return products.filter((product) => {
			return (
				product.aftrPrice >= priceRange[0] &&
				product.aftrPrice <= priceRange[1] &&
				(selectedCategories.length === 0 ||
					selectedCategories.includes(product.category)) &&
				(selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
				(selectedColors.length === 0 || selectedColors.includes(product.color))
			);
		});
	}, [products, priceRange, selectedCategories, selectedColors, selectedSizes]); // ✅ Runs when `products` OR `priceRange` change

	const [accordionState, setAccordionState] = useState({
		product: true,
		price: true,
		size: true,
		color: true,
	});

	const toggleAccordion = (type) => {
		setAccordionState((prev) => ({ ...prev, [type]: !prev[type] }));
	};

	if (isPending) return <div className="text-center">Loading...</div>;
	if (error)
		return <div className="text-red-500">Failed to load products. Please try again later.</div>;

	return (
		<div className="flex flex-col md:flex-row p-3 gap-3 mb-3 xl:gap-4 xl:mb-4 xl:p-4 min-[1640px]:px-0">
			<div className="col-span-1 md:w-[310px]">
				{/* Product type accordion */}
				<Accordion
					title="Product Type"
					isOpen={accordionState.product}
					onToggle={() => toggleAccordion("product")}>
					{
						<div
							className={`grid gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
								accordionState.product
									? "grid-rows-[1fr] opacity-100 h-auto mt-4"
									: "grid-rows-[0fr] opacity-0 h-0"
							}`}>
							<label className="inline-flex items-center pr-4 py-1 text-sm text-gray-700">
								<input
									type="checkbox"
									className="form-checkbox h-5 w-5 text-gray-600 accent-black"
									id="fTshirt"
								/>
								<span className="ml-2 font-normal text-black text-sm">
									T-Shirt<span className="ml-1">(20)</span>
								</span>
							</label>
							<label className="inline-flex items-center pr-4 py-1 text-sm text-gray-700">
								<input
									type="checkbox"
									className="form-checkbox h-5 w-5 text-gray-600 accent-black"
									id="fSweatshirt"
								/>
								<span className="ml-2 font-normal text-black text-sm">
									Sweatshirts<span className="ml-1">(15)</span>
								</span>
							</label>
							<label className="inline-flex items-center pr-4 py-1 text-sm text-gray-700">
								<input
									type="checkbox"
									className="form-checkbox h-5 w-5 text-gray-600 accent-black"
									id="fTankTop"
								/>
								<span className="ml-2 font-normal text-black text-sm">
									Tank Tops<span className="ml-1">(36)</span>
								</span>
							</label>
							<label className="inline-flex items-center pr-4 py-1 text-sm text-gray-700">
								<input
									type="checkbox"
									className="form-checkbox h-5 w-5 text-gray-600 accent-black"
									id="fDressShirt"
								/>
								<span className="ml-2 font-normal text-black text-sm">
									Dress shirts<span className="ml-1">(41)</span>
								</span>
							</label>
						</div>
					}
				</Accordion>
				{/* price accordion */}
				<Accordion
					title="Price"
					isOpen={accordionState.price}
					onToggle={() => toggleAccordion("price")}>
					{
						<div
							className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
								accordionState.price
									? "grid-rows-[1fr] opacity-100 h-auto mt-4"
									: "grid-rows-[0fr] opacity-0 h-0"
							}`}>
							<div className="flex flex-col">
								<PriceFilter onPriceChange={handlePriceChange} />
							</div>
						</div>
					}
				</Accordion>
				{/* Size accordion */}
				<Accordion
					title="Size"
					isOpen={accordionState.size}
					onToggle={() => toggleAccordion("size")}>
					{
						<div
							className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
								accordionState.size
									? "grid-rows-[1fr] opacity-100 h-auto mt-4"
									: "grid-rows-[0fr] opacity-0 h-0"
							}`}>
							<span className="p-2 border inline-block cursor-pointer">XS</span>
							<span className="p-2 border inline-block cursor-pointer">S</span>
							<span className="p-2 border inline-block cursor-pointer">M</span>
							<span className="p-2 border inline-block cursor-pointer">L</span>
							<span className="p-2 border inline-block cursor-pointer">XL</span>
							<span className="p-2 border inline-block cursor-pointer">XXL</span>
						</div>
					}
				</Accordion>
				{/* color accordion */}
				<Accordion
					title="Color"
					isOpen={accordionState.color}
					onToggle={() => toggleAccordion("color")}>
					{
						<div
							className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
								accordionState.color
									? "grid-rows-[1fr] opacity-100 h-auto mt-4"
									: "grid-rows-[0fr] opacity-0 h-0"
							}`}>
							<span className="p-2 border inline-block mr-3 cursor-pointer">
								<span className="bg-black h-6 w-6 block border border-[#E6E6E6]"></span>
							</span>
							<span className="p-2 border inline-block mr-3 cursor-pointer">
								<span className="bg-[#FFE3B7] h-6 w-6 block border border-[#E6E6E6]"></span>
							</span>
							<span className="p-2 border inline-block mr-3 cursor-pointer">
								<span className="bg-[#2900FF] h-6 w-6 block border border-[#E6E6E6]"></span>
							</span>
							<span className="p-2 border inline-block mr-3 cursor-pointer">
								<span className="bg-white h-6 w-6 block border border-[#E6E6E6]"></span>
							</span>
						</div>
					}
				</Accordion>
			</div>

			{/* Products Grid */}
			<div className="w-full md:w-3/4">
				<Suspense fallback={<div>Loading products...</div>}>
					<ProductGrid products={filteredProducts} isPending={isPending} error={error} />
				</Suspense>
			</div>
			{/* <ProductGrid products={filteredProducts} isPending={isPending} error={error} /> */}
		</div>
	);
};

export default Category;
