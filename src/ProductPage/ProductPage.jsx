import { useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductPage() {
	let { state } = useLocation();
	let product = state.product;
	let [quantity, setQuantity] = useState(0);

	const [cartItems, setCartItems] = useOutletContext();

	function increaseQuantity() {
		setQuantity(quantity + 1);
	}

	function decreaseQuantity() {
		if (quantity === 0) return;
		setQuantity(quantity - 1);
	}

	function addItemToCart(product) {
		if (cartItems.find((p) => p.title === product.title)) {
			setCartItems(
				cartItems.map((p) => {
					if (p.title === product.title) {
						return { ...p, quantity: product.quantity + p.quantity };
					} else return p;
				})
			);
		} else setCartItems([...cartItems, product]);
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
					<button onClick={() => increaseQuantity()}>+</button>
					<button onClick={() => decreaseQuantity()}>-</button>
					<Link to=".." relative="path">
						<button onClick={() => addItemToCart({ ...product, quantity })}>
							Add to Cart
						</button>
					</Link>
				</div>
			</main>
		</>
	);
}
