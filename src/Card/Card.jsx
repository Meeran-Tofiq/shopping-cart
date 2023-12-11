import { Link } from "react-router-dom";

export default function Card({ loading, id, product }) {
	if (loading) {
		return (
			<li key={id}>
				<div></div>
				<h2>Loading...</h2>
			</li>
		);
	}

	return (
		<Link to="./purchase" state={{ product: product }}>
			<li key={id}>
				<img src={product.image} />
				<h2>{product.title}</h2>
				<span>{product.price}</span>
				<p>{product.description}</p>
			</li>
		</Link>
	);
}
