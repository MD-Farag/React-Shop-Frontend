import SingleProduct from "../../components/commonComp/SingleProduct";

const ProductGrid = ({ products, isPending, error }) => {
	return (
		<div className="flex-1 grid grid-cols-1 gap-2 min-[375px]:gap-4 min-[375px]:grid-cols-2 sm:col-span-2 sm:grid-cols-3 md:grid-cols-2 md:gap-3 min-[992px]:grid-cols-3 xl:col-span-4 xl:gap-4 xl:grid-cols-4 w-full">
			{error && <p>{error} </p>}
			{isPending && <p>Loading...</p>}
			{products &&
				products.map((item) => (
					<SingleProduct
						key={item.id}
						id={item.id}
						name={item.name}
						img={item.imgs[0].src}
						bfrPrice={item.bfrPrice}
						aftrPrice={item.aftrPrice}
						sale={item.sale}
					/>
				))}
		</div>
	);
};

export default ProductGrid;
