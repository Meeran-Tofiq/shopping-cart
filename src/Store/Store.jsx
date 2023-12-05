import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";

export default function Store() {
	let { category } = useParams();
	console.log(category);

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
