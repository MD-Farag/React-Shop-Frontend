import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Selected from "../components/commonComp/Selected";
import ProductSlider from "../components/PDPComp/ProductSlider";
import ProductData from "../components/PDPComp/ProductData";
import { useFetch } from "../hooks/useFetch";
import PdDescDetails from "../components/PDPComp/PdDescDetails";
import MaterialDetails from "../components/PDPComp/MaterialDetails";
import CustomersRate from "../components/PDPComp/CustomersRate";
import Reviews from "../components/PDPComp/Reviews";

export default function Product() {
	const { id } = useParams();
	const API_URL = process.env.REACT_APP_BACKEND_URL;
	// const itemUrl = 'http://localhost:3000/products/' + id;
	// const itemUrl = 'http://localhost:5000/api/products/' + id;
	const itemUrl = `${API_URL}/api/products/${id}`;
	const { data: item, isPending, error } = useFetch(itemUrl);

	return (
		<div>
			{error && <p>{error} </p>}
			{isPending && <p>Loading...</p>}
			{item && (
				<>
					<div className="flex flex-col md:grid md:items-start md:grid-cols-2 md:gap-4 lg:gap-10 mb-10 lg:mb-20 mt-8 max-[1630px]:px-3 w-full">
						<ProductSlider imgs={item.imgs} thumbs={item.thumbs} />
						<ProductData item={item} />
					</div>
					<div className="mb-10 lg:mb-20">
						<div className="relative mx-auto pt-12 md:pt-16 w-full mb-10 lg:mb-20 transition-all duration-200 ease-in-out max-[1630px]:px-3">
							<div>
								<input
									className="peer sr-only"
									type="radio"
									name="answer"
									id="discription"
									defaultChecked
								/>
								<label
									className="absolute top-[5px] left-[10%] sm:left-[25%] md:sm:left-[30%] lg:md:sm:left-[35%] 2xl:md:sm:left-[38%] flex justify-center cursor-pointer rounded-full text-[#D4D4D4] py-2 px-4 focus:outline-none peer-checked:text-[#000000] peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-[#FBB03B] "
									htmlFor="discription">
									Description
								</label>
								<div className="py-6 mt-2 mx-auto  hidden peer-checked:block peer-checked:translate-x-1">
									<div className="grid mx-auto w-full sm:grid-cols-2">
										<PdDescDetails />
										<MaterialDetails />
									</div>
								</div>
							</div>
							<div>
								<input
									className="peer sr-only"
									type="radio"
									name="answer"
									id="review"
								/>
								<label
									className="absolute top-[5px] left-[60%] md:left-[55%] 2xl:left-[53%] flex justify-center cursor-pointer rounded-full text-[#D4D4D4] py-2 px-4 focus:outline-none peer-checked:text-[#000000] peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-[#FBB03B]"
									htmlFor="review">
									Reviews
								</label>
								<div className="py-6 mt-2 mx-auto  hidden peer-checked:block peer-checked:translate-x-1">
									<div className="grid mx-auto w-full md:grid-cols-2 px-2 lg:px-4 md:items-center">
										<CustomersRate />
										<Reviews />
									</div>
								</div>
							</div>
						</div>
						<Selected />
					</div>
				</>
			)}
		</div>
	);
}
