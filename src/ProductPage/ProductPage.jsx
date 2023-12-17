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

	function addItemToCart(item) {
		if (cartItems.length < 1) {
			setCartItems([...cartItems, item]);
			return;
		}
		let obj = cartItems.find((elem) => elem.title === item.title);
		if (obj) {
			increaseQuantityOfItem(obj, item.quantity);
		} else {
			setCartItems([...cartItems, item]);
		}
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
