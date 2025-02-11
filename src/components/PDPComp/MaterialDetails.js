
import { assets } from "../../assets/assets";

const MaterialDetails = () => {
    return (
        <div>
            <div className="flex flex-col mb-6 items-center text-center px-2 py-3 lg:px-3 lg:py-4">
                <div className="mr-4 2xl:mr-9">
                    <img src={assets.mat} alt="shipping" className="h-[60px] mb-4" />
                </div>
                <div>
                    <h3 className="text-black font-medium mb-3 text-base md:text-lg 2xl:text-xl">Material(s) and care</h3>
                    <p className="text-[#808080] font-light max-md:px-12 lg:px-16 text-sm lg:text-base 2xl:text-lg">Body: 98% COTTON - 2% ELASTANE</p>
                    <img src={assets.icons} alt="shipping" className="h-[40px] mb-4 mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default MaterialDetails