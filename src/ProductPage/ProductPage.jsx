import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductPage() {
	let { state } = useLocation();
	let product = state.product;
	let [quantity, setQuantity] = useState(0);

	function increasequantity() {
		setQuantity(quantity + 1);
	}

	function decreasequantity() {
		if (quantity === 0) return;
		setQuantity(quantity - 1);
	}

	return (
		<>
			<main>
				<img src={product.image} />
				<h2>{product.title}</h2>
				<span>{product.price}</span>
				<p>{product.description}</p>

				<div>
					<span>{quantity}</span>
					<button onClick={() => increasequantity()}>+</button>
					<button onClick={() => decreasequantity()}>-</button>
					<Link to=".." relative="path">
						<button>Add to Cart</button>
					</Link>
				</div>
			</main>
		</>
	);
}
