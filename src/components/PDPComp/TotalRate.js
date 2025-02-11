import { assets } from "../../assets/assets";
const stars = [
	{ id: 1, color: "currentColor", stroke: "none" },
	{ id: 2, color: "currentColor", stroke: "none" },
	{ id: 3, color: "currentColor", stroke: "none" },
	{ id: 4, color: "currentColor", stroke: "none" },
	{ id: 5, color: "none", stroke: "currentColor" },
];

const TotalRate = () => {
	return (
		<div className="flex flex-col mb-10 items-center gap-4 text-sm rounded text-slate-500 sm:max-md:mr-5 sm:max-md:mb-0 lg:mb-0 lg:mr-5 xl:mr-8">
			<span className="text-7xl text-black">4.5</span>
			<span
				className="flex gap-1 text-amber-400"
				role="img"
				aria-label="Rating: 4 out of 5 stars">
				{stars.map((star) => (
					<span aria-hidden="true" key={star.id}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill={star.color}
							stroke={star.stroke}
							className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				))}
			</span>
			<span className="text-sm leading-6 text-slate-400 flex items-center">
				<img src={assets.userRate} alt="user" className="h-[13px] mr-2" /> 81 all opinoins
			</span>
		</div>
	);
};

export default TotalRate;
