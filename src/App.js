import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useLocation } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import { useEffect, useState } from "react";
import Create from "./pages/Create";
import PageNav from "./components/commonComp/PageNav";
import HomeNav from "./components/homeComp/HomeNav";
import Footer from "./components/commonComp/Footer";
import Cart from "./pages/Cart";
import { Checkout } from "./pages/Checkout";

function App() {
	const location = useLocation().pathname;
	const [chooseNav, setChooseNav] = useState(true);

	useEffect(() => {
		setChooseNav(location === "/");
	}, [location]);

	return (
		<div className="App max-w-[1600px] mx-auto">
			{chooseNav ? <HomeNav /> : <PageNav />}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:id">
					<Product />
				</Route>
				<Route path="/category">
					<Category />
				</Route>
				<Route path="/create">
					<Create />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
