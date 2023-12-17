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
		(acc, product) => acc + product.price * product.quantity,
		0
	);

	function increaseQuantityOfItem(product, amount = 1) {
		setCartItems(
			cartItems.map((p) => {
				if (p.title === product.title) {
					return { ...p, quantity: product.quantity + amount };
				} else return p;
			})
		);
	}

	function decreaseQuantityOfItem(product, amount = 1) {
		setCartItems(
			cartItems.map((p) => {
				if (p.title === product.title) {
					return { ...p, quantity: product.quantity - amount };
				} else return p;
			})
		);
	}

	function removeItemFromCart(product) {
		setCartItems(cartItems.filter((i) => i !== product));
	}

	return (
		<main>
			<>
				<ul>
					{cartItems.map((product) => (
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
								<button
									onClick={() => {
										if (product.quantity > 1) decreaseQuantityOfItem(product);
										else removeItemFromCart(product);
									}}
								>
									-
								</button>
							</div>
							<button onClick={() => removeItemFromCart(product)}>TRASH</button>
						</li>
					))}
				</ul>
				<span>TOTAL</span>
				<span>${total}</span>
			</>
		</main>
	);
}
