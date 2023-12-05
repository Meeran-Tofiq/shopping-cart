import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Header from "../Header/Header";

export default function Store({ category }) {
	return (
		<>
			<Header category={category} />
			<main>
				<h1>{category.toUpperCase()}</h1>
				<Products category={category}></Products>
			</main>
		</>
	);
}
