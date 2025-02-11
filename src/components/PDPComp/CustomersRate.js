import RateBar from "./RateBar";
import TotalRate from "./TotalRate";

const CustomersRate = () => {
    return (
        <div className="flex flex-col align-stretch sm:max-md:w-[75%] sm:max-md:mx-auto xl:w-[75%] xl:mx-auto px-2 max-md:mb-10">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-2 mb-10">
                <TotalRate />
                <RateBar />
            </div>
            <button className="bg-[#FBB03B] text-black py-2 px-4 text-base max-w-[189px] rounded-full lg:py-3 lg:px-6 mx-auto">Add Opinon</button>
        </div>
    )
}

export default CustomersRate