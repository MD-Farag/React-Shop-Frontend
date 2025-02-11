import React, { useState, useCallback } from "react";
import ReactSlider from "react-slider";
import { debounce } from "../../utils/debounce"; // Assuming debounce is correctly implemented

const PriceFilter = ({ onPriceChange }) => {
	// 1️⃣ Local state for immediate UI update
	const [priceValue, setPriceValue] = useState([0, 1000]);

	// 2️⃣ Debounced function to trigger the API call (fetching new products)
	const debouncedUpdatePrice = useCallback(
		debounce((newPrice) => {
			console.log("Fetching products for price range:", newPrice);
			onPriceChange(newPrice); // 🔹 Only call API after debounce delay
		}, 500),
		[]
	);

	// 3️⃣ Handle slider movement
	const handleSliderChange = (value) => {
		setPriceValue(value); // 🔹 Update UI immediately
		debouncedUpdatePrice(value); // 🔹 Wait 500ms before fetching
	};

	return (
		<div className="flex flex-col">
			{/* Price Labels */}
			<div className="flex justify-between mb-2">
				<span className="bg-[#f4f4f4] block p-2">{priceValue[0]} USD</span>
				<span className="bg-[#f4f4f4] block p-2">{priceValue[1]} USD</span>
			</div>

			{/* Price Slider */}
			<ReactSlider
				className="w-full h-[30px] horizontal-slider"
				thumbClassName="top-[6px] w-[20px] h-[20px] border-[2px] rounded-full border-black bg-white example-thumb cursor-pointer"
				trackClassName="top-[15px] h-[3px] example-track"
				min={0}
				max={1000}
				pearling
				minDistance={10}
				value={priceValue} // 🔹 Controlled component
				onChange={handleSliderChange} // 🔹 Instant UI update + debounced API call
			/>
		</div>
	);
};

export default PriceFilter;
