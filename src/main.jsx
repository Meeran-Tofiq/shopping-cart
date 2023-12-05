import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Store/Store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "store/:category",
		element: <Store />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
