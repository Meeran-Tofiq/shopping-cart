import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Store from "./Store/Store";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{ path: "store/:category", element: <Store /> },
			{ path: "store/:category/purchase", element: <ProductPage /> },
			{ path: "cart", element: <CartPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
