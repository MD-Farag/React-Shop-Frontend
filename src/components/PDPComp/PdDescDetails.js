import { assets } from "../../assets/assets";

const PdDescDetails = () => {
    return (
        <div className="flex flex-col mb-6 items-center text-center py-3 lg:py-4">
            <div className="mr-4 2xl:mr-9">
                <img src={assets.desc} alt="shipping" className="h-[60px] mb-4" />
            </div>
            <div>
                <h3 className="text-black font-medium mb-3 text-base md:text-lg 2xl:text-xl">Details and product description</h3>
                <p className="text-[#808080] font-light max-md:px-12 lg:px-16 text-sm lg:text-base 2xl:text-lg">White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
            </div>
        </div>
    )
}

export default PdDescDetails