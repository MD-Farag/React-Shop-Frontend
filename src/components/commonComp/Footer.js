import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
	return (
		<footer>
			<div
				className="mb-20 bg-no-repeat bg-[60%] md:bg-[50%_5%] justify-evenly items-center"
				style={{ backgroundImage: `url(${assets.selec1})` }}>
				<div className="flex items-center flex-col bg-[#0000004d] px-4 lg:px-8 xl:px-20 2xl:px-40 py-10 sm:py-16 md:py-18 lg:py-20 xl:py-24 2xl:py-28 sm:ites-stretch lg:flex-row">
					<p className="max-lg:text-center font-normal text-white mx-auto text-2xl max-lg:mb-8 sm:max-w-[600px] md:text-3xl lg:text-left lg:flex-1 lg:ml-0">
						Subscribe to our newsletter and receive exclusive offers every week
					</p>
					<form className="text-left flex flex-col max-sm:items-center sm:max-w-[600px] sm:flex-row sm:justify-between lg:flex-row">
						<input
							type="text"
							placeholder="Enter your email"
							className="h-[48px] max-lg:mb-6 sm:min-w-[300px] px-8 rounded-full sm:mr-8 md:mr-4 focus:outline-none"
						/>
						<button
							type="submit"
							className="flex items-center h-[48px] py-2.5 px-8 min-[375px]:py-3 bg-[#FBB03B] text-black rounded-full text-sm sm:text-base md:text-lg">
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div className="grid justify-items-center sm:justify-items-end gap-20 sm:gap-10 sm:grid-cols-3 lg:grid-cols-5 mb-20">
				<div className="text-left max-sm:w-[80%] sm:w-[90%] sm:col-span-2 lg:col-span-2 min-[1630px]:w-full">
					<Link to="/" className="flex items-end mb-8">
						<img
							src={assets.logoBlack}
							alt="e-shop logo"
							className="mr-5 max-w-[40px] sm:block"
						/>
						<span className="text-lg md:text-xl font-normal text-black">
							<span className="text-[#fbb03c]">E-</span>Shop
						</span>
					</Link>
					<p className="text-base xl:text-lg text-[#808080] font-light mb-8">
						House My Brand designs clothing for the young, the old & everyone in between
						– but most importantly, for the fashionable
					</p>
					<ul className="flex items-center">
						<li className="mr-4">
							<Link to="/">
								<img
									src={assets.logoFace}
									alt="e-shop logo"
									className="mr-5 max-w-[20px] max-h-[20px]"
								/>
							</Link>
						</li>
						<li className="mr-4">
							<Link to="/">
								<img
									src={assets.logoTwitter}
									alt="e-shop logo"
									className="mr-5 max-w-[20px] max-h-[20px]"
								/>
							</Link>
						</li>
						<li className="mr-4">
							<Link to="/">
								<img
									src={assets.logoIn}
									alt="e-shop logo"
									className="mr-5 max-w-[20px] max-h-[20px]"
								/>
							</Link>
						</li>
						<li className="mr-4">
							<Link to="/">
								<img
									src={assets.logoInsta}
									alt="e-shop logo"
									className="mr-5 max-w-[20px] max-h-[20px] sm:block"
								/>
							</Link>
						</li>
						<li className="mr-4">
							<Link to="/">
								<img
									src={assets.logoYoutube}
									alt="e-shop logo"
									className="mr-5 max-w-[20px] max-h-[20px] sm:block"
								/>
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-left max-sm:w-[80%] sm:w-[90%] sm:col-span-1 lg:col-span-1 min-[1630px]:w-full">
					<p className="font-semibold mb-8">Shopping online</p>
					<ul className="flex flex-col">
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Order Status
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									{" "}
									Returns
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Payment Options
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Contact Us
								</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-left max-sm:w-[80%] sm:w-[90%] sm:col-span-2 lg:col-span-1 min-[1630px]:w-full">
					<p className="font-semibold mb-8">Information</p>
					<ul className="flex flex-col">
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Gift Cards
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Find a store
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Newsletter
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Bacome a member
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Site feedback
								</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-left max-sm:w-[80%] sm:w-[90%] sm:col-span-1 lg:col-span-1 min-[1630px]:w-full">
					<p className="font-semibold mb-8">Contact</p>
					<ul className="flex flex-col">
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									store@uikit.com
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Hotline: +1 131 138 138
								</span>
							</Link>
						</li>
						<li className="mb-4">
							<Link to="/create" className="max-sm:mb-14">
								<span className="text-sm md:text-base cursor-pointer font-light">
									Create a new product
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr className="bg-[#EBEBEB] h-[1px] bottom-[120px] min-[377px]:bottom-[100px] z-10 left-0 w-full" />
			<div className="py-10 text-center px-4">
				<p className="text-[#AEAEAE] text-sm md:text-base xl:text-[16px]">
					DESIGN BY ICEO.CO - © 2024. ALL RIGHTS RESERVED.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
