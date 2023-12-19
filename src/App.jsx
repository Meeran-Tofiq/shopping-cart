import { useEffect, useState } from "react";
import Header from "./Header/Header";
import { Outlet, useLocation } from "react-router-dom";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const location = useLocation();
	document.body.style.overflow = "hidden";

	useEffect(() => {
		if (location.pathname === "/") {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "scroll";
		}
	}, [location]);

	return (
		<div style={{ height: "100vh" }}>
			<Header></Header>
			<Outlet context={[cartItems, setCartItems]} />
		</div>
	);
}

export default App;
