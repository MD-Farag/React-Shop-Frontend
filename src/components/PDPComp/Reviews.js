import { assets } from "../../assets/assets";

const users = [
	{
		name: "john",
		img: assets.johnImg,
		feeBack:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
	},
	{
		name: "eveline",
		img: assets.evelineImg,
		feeBack:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
	},
	{
		name: "anne",
		img: assets.anneImg,
		feeBack:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
	},
];

const Reviews = () => {
	return (
		<div className="px-2">
			{users.map((user) => (
				<div className="flex items-start mb-6" key={user.name}>
					<img src={user.img} alt="john" className="w-[40px] mr-4" />
					<div className="flex flex-col items-start">
						<h3 className="text-black font-normal mb-1 text-sm">{user.name}</h3>
						<p className="text-[#808080] font-light text-sm">{user.feeBack}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reviews;
