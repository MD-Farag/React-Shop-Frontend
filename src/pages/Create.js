import React, { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Create() {
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [bfrPrice, setBfrPrice] = useState("");
	const [aftrPrice, setAftrPrice] = useState("");
	const [imgs, setImgs] = useState([]);
	const [thumbs, setThumbs] = useState([]);
	const nameInput = useRef(null);
	const API_URL = process.env.REACT_APP_BACKEND_URL;

	const resetForm = () => {
		setName("");
		setBrand("");
		setBfrPrice("");
		setAftrPrice("");
		setImgs([]);
		setThumbs([]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, brand, bfrPrice, aftrPrice, imgs, thumbs);
		// we need to create actual image to save it inside the react project so you can retrieve anytime
		// we need to show all existed products in category page
		postData({ name, brand, bfrPrice, aftrPrice, imgs, thumbs });
		resetForm();
		nameInput.current.focus();
	};

	const handleImagsUpload = (e) => {
		for (let i = 0; i < e.target.files.length; i++) {
			const urlPrefix = URL.createObjectURL(e.target.files[i]);
			const imgItem = {
				src: urlPrefix,
			};
			setImgs((prevImgs) => [...prevImgs, imgItem]);
		}
	};

	const handleThumbsUpload = (e) => {
		for (let i = 0; i < e.target.files.length; i++) {
			const urlPrefix = URL.createObjectURL(e.target.files[i]);
			const thumbItem = {
				src: urlPrefix,
			};
			setThumbs((prevThumbs) => [...prevThumbs, thumbItem]);
		}
	};

	const { postData, error, isPending } = useFetch(`${API_URL}/products`, "POST");

	return (
		<div className="text-center py-16">
			{error && <p>{error} </p>}
			{isPending && <p>Loading...</p>}
			{postData && (
				<>
					<h2 className="text-xl mb-10">Create a New Product</h2>
					<form
						className="flex flex-col text-left mx-auto max-w-[600px]"
						onSubmit={handleSubmit}>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">Product Name</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								ref={nameInput}
								required
							/>
						</label>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">Brand</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="text"
								onChange={(e) => setBrand(e.target.value)}
								value={brand}
								required
							/>
						</label>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">Before Price</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="number"
								onChange={(e) => setBfrPrice(e.target.value)}
								value={bfrPrice}
								required
							/>
						</label>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">After Price</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="number"
								onChange={(e) => setAftrPrice(e.target.value)}
								value={aftrPrice}
								required
							/>
						</label>
						<div className="flex my-2 justify-end">
							{imgs.map((img) => (
								<img
									className="w-[100px] p-1 border"
									src={img.src}
									alt="img"
									key={img.src}
								/>
							))}
						</div>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">product images</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="file"
								onChange={(e) => handleImagsUpload(e)}
								multiple
								required
							/>
						</label>
						<div className="flex my-2 justify-end">
							{thumbs.map((thumb) => (
								<img
									className="w-[100px] p-1 border"
									src={thumb.src}
									alt="img"
									key={thumb.src}
								/>
							))}
						</div>
						<label className="mb-4 flex items-center">
							<span className="min-w-[150px] inline-block">product thumbs</span>
							<input
								className="border rounded-md h-[40px] min-w-[170px] w-full p-2"
								type="file"
								onChange={(e) => handleThumbsUpload(e)}
								multiple
								required
							/>
						</label>
						<button className="border rounded-md w-[100px] mx-auto mt-4 p-2 hover:bg-black hover:text-white">
							Submit
						</button>
					</form>
				</>
			)}
		</div>
	);
}
