import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

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
		<>
			<Header></Header>
			<Outlet context={[cartItems, setCartItems]} />
			<Footer></Footer>
		</>
	);
}

export default App;
