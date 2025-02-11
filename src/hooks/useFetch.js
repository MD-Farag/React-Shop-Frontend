import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {
	const [data, setData] = useState(null);
	const [isPending, setIspending] = useState(false);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState(null);

	const postData = (postData) => {
		setOptions({
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		});
	};

	// use useRef to wrap an object/array argument
	//  which is a useEffect dependency

	useEffect(() => {
		if (!url) return;

		const controller = new AbortController();

		const fetchData = async (fetOptions) => {
			setIspending(true);

			try {
				const res = await fetch(url, { ...fetOptions, signal: controller.signal });
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const json = await res.json();
				setIspending(false);
				setData(json);
				setError(null);
			} catch (error) {
				if (error.name === "AbortError") {
					console.log("the fetch was aborted");
				} else {
					setIspending(false);
					setError("Could not fetch the data");
					console.log(error.message);
				}
			}
		};

		if (method === "GET") {
			fetchData();
		}
		if (method === "POST" && options) {
			fetchData(options);
		}

		return () => {
			controller.abort();
		};
	}, [method, options, url]);

	return { data, isPending, error, postData };
};
