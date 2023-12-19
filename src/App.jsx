import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";

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
			<Footer></Footer>
		</div>
	);
}

export default App;
