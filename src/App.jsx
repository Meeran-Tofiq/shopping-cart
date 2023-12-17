import { useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<>
			<Header></Header>
			<Outlet context={[cartItems, setCartItems]} />
		</>
	);
}

export default App;
