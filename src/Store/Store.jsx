import { useEffect, useState } from "react";
import Products from "../Products/Products";

export default function Store({ category }) {
	return (
		<main>
			<h1>{category.toUpperCase()}</h1>
			<Products category={category}></Products>
		</main>
	);
}
