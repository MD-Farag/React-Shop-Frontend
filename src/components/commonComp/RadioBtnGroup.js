import React from "react";

const RadioBtnGroup = ({ name, items, value, onChange }) => {
	return (
		<>
			{items.map((item) => (
				<label key={item.value} className="cursor-pointer w-full max-w-[200px]">
					<input
						name={name}
						type="radio"
						value={item.value}
						id={item.value}
						onChange={() => {
							onChange(item.value);
							console.log(`${name} is: ${item.value}`);
						}}
						className="sr-only"
						checked={value === item.value}
					/>
					<div
						className={`h-[50px] flex items-center justify-center p-4 overflow-hidden rounded-[50px] border ${
							value === item.value ? "border-[#fbb03b] border-[2px]" : "border-[#D8D8D8]"
						}`}>
						<img className="h-auto p-4" src={item.label} alt={`${item.value} logo`} />
					</div>
				</label>
			))}
		</>
	);
};

export default RadioBtnGroup;

// import React from "react";
// import paypalLogo from "../../assets/paypal-logo.png";
// import visaLogo from "../../assets/visa-logo.png";
// import discoverLogo from "../../assets/discover-logo.png";
// import idealLogo from "../../assets/ideal-logo.png";

// const RadoiBtn = ({ item }) => {
// 	return (
// 		<label class="cursor-pointer w-full max-w-[200px]">
// 			<input
// 				name="paymentMethod"
// 				type="radio"
// 				value={item.value}
// 				id={item.value}
// 				checked={value === item.value}
// 				class="peer"
// 			/>
// 			<div class="h-[50px] flex items-center justify-center p-2 rounded-[50px] border border-[#D8D8D8] peer-checked:border-[#fbb03b]">
// 				<img className="h-full" src={item.label} />
// 			</div>
// 		</label>
// 	);
// };

// export default RadoiBtn;

// <div class="grid grid-cols-2 justify-items-center gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-6">
// 			<label class="cursor-pointer w-full max-w-[200px]">
// 				<input type="radio" class="peer sr-only" name="paymentMethod" />
// 				<div class="h-[50px] flex items-center justify-center p-4 rounded-[50px] border border-[#D8D8D8] peer-checked:border-[#fbb03b]">
// 					<img className="h-[full]" src={paypalLogo} />
// 				</div>
// 			</label>
// 			<label class="cursor-pointer w-full max-w-[200px]">
// 				<input type="radio" class="peer sr-only" name="paymentMethod" />
// 				<div class="h-[50px] flex items-center justify-center p-4 rounded-[50px] border border-[#D8D8D8] peer-checked:border-[#fbb03b]">
// 					<img className="h-full" src={visaLogo} />
// 				</div>
// 			</label>
// 			<label class="cursor-pointer w-full max-w-[200px]">
// 				<input type="radio" class="peer sr-only" name="paymentMethod" />
// 				<div class="h-[50px] flex items-center justify-center p-4 rounded-[50px] border border-[#D8D8D8] peer-checked:border-[#fbb03b]">
// 					<img className="h-full" src={discoverLogo} />
// 				</div>
// 			</label>
// 			<label class="cursor-pointer w-full max-w-[200px]">
// 				<input type="radio" class="peer sr-only" name="paymentMethod" />
// 				<div class="h-[50px] flex items-center justify-center p-4 rounded-[50px] border border-[#D8D8D8] peer-checked:border-[#fbb03b]">
// 					<img className="h-full" src={idealLogo} />
// 				</div>
// 			</label>
// 		</div>
