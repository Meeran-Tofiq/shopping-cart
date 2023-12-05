import { useEffect, useState } from "react";
import Card from "../Card/Card";

const useProductsURL = (category) => {
	const [products, setProducts] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/category/" + category, {
			mode: "cors",
		})
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => setProducts(response))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [category]);

	return { products, error, loading };
};

export default function Products({ category }) {
	const { products, error, loading } = useProductsURL(category);

	if (loading) {
		return (
			<ul>
				{[1, 2, 3].map((i) => (
					<Card loading={loading} id={i}></Card>
				))}
			</ul>
		);
	}

	if (error) {
		return (
			<>
				<h1>Oh no...</h1>
				<p>
					Something went wrong... <br />
					Please try again later...
				</p>
			</>
		);
	}

	return (
		<ul>
			{products.map((product) => (
				<Card loading={loading} id={product.id} product={product}></Card>
			))}
		</ul>
	);
}
