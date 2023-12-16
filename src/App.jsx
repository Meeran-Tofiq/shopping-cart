import { useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function App() {
	const [cartItems, setCartItems] = useState({});

	function addItemToCart(item) {
		setCartItems({ ...cartItems, item });
	}

	return (
		<>
			<Header></Header>
			<Outlet
				cartItems={cartItems}
				setCartItems={setCartItems}
				addItemToCart={addItemToCart}
			/>
		</>
	);
}

export default App;
