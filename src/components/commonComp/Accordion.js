import { assets } from "../../assets/assets";

const Accordion = ({ title, isOpen, onToggle, children }) => {
	return (
		<div className="p-4 border mb-3 xl:mb-4">
			<button className="flex items-center justify-between w-full" onClick={onToggle}>
				<span className="uppercase font-semibold text-base">{title}</span>
				<img src={isOpen ? assets.arrowUp : assets.arrDown} alt="Toggle" />
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "opacity-100 h-auto mt-4" : "opacity-0 h-0"
				}`}>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
