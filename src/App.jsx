import { useEffect, useState } from "react";
import Header from "./Header/Header";
import { Outlet, useParams } from "react-router-dom";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const shouldOverflow = useParams();

	useEffect(() => {
		if (!Object.keys(shouldOverflow).length) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [shouldOverflow]);

	return (
		<div style={{ height: "100vh" }}>
			<Header></Header>
			<Outlet context={[cartItems, setCartItems]} />
		</div>
	);
}

export default App;
