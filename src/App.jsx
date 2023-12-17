import { useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<div style={{ height: "100vh" }}>
			<Header></Header>
			<Outlet context={[cartItems, setCartItems]} />
		</div>
	);
}

export default App;
