import { useEffect, useState } from "react";

export default function Store({ category }) {
	return (
		<main>
			<h1>{category.toUpperCase()}</h1>
			<Products category={category}></Products>
		</main>
	);
}
