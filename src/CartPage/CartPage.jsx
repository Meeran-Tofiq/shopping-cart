import { useOutletContext } from "react-router-dom";

export default function CartPage() {
	const [cartItems, setCartItems] = useOutletContext();

	if (cartItems.length < 1) {
		return (
			<>
				<div>
					<h1>Uh oh...</h1>
					<h3>
						Your cart appears to be empty... Head to the shop to fill it up!
					</h3>
				</div>
			</>
		);
	}

	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	function increaseQuantityOfItem(item, amount = 1) {
		let obj = cartItems.find((elem) => elem.title === item.title);
		if (obj) {
			obj.quantity += amount;
		}
	}

	function decreaseQuantityOfItem(item, amount = 1) {
		let obj = cartItems.find((elem) => elem.title === item.title);
		if (obj) {
			obj.quantity -= amount;
		}
	}

	function removeItemFromCart(item) {
		setCartItems(cartItems.filter((i) => i !== item));
	}

	return (
		<main>
			<>
				<ul>
					{cartItems.map((product) => (
						<>
							<li key={product.id}>
								<div>
									<img src={product.image} />
									<h2>{product.title}</h2>
									<span>{product.price}</span>
								</div>
								<div>
									<span>{product.quantity}</span>
									<span>{product.price * product.quantity}</span>
									<button onClick={() => increaseQuantityOfItem(product)}>
										+
									</button>
									<button onClick={() => decreaseQuantityOfItem(product)}>
										-
									</button>
								</div>
								<button onClick={removeItemFromCart}>TRASH</button>
							</li>
						</>
					))}
				</ul>
				<span>TOTAL</span>
				<span>${total}</span>
			</>
		</main>
	);
}
