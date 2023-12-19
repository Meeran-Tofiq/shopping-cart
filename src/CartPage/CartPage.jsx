import { useOutletContext } from "react-router-dom";
import styles from "./CartPage.module.css";

export default function CartPage() {
	const [cartItems, setCartItems] = useOutletContext();

	if (cartItems.length < 1) {
		return (
			<main className={styles.empty}>
				<h1>Uh oh...</h1>
				<h3>
					Your cart appears to be empty... Head to the shop to fill it up!
				</h3>
			</main>
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
		<main className={styles.nonEmpty}>
			<ul>
				{cartItems.map((product) => (
					<li key={product.id}>
						<div className={styles.imageDiv}>
							<img src={product.image} />
							<h2>{product.title}</h2>
							<span>${product.price}</span>
						</div>
						<span>{product.quantity}</span>
						<div className={styles.buttonDiv}>
							<button
								onClick={() => {
									if (product.quantity > 1) decreaseQuantityOfItem(product);
									else removeItemFromCart(product);
								}}
							>
								-
							</button>
							<span>${product.price * product.quantity}</span>
							<button onClick={() => increaseQuantityOfItem(product)}>+</button>
						</div>
						<button onClick={() => removeItemFromCart(product)}>TRASH</button>
					</li>
				))}
			</ul>
			<div>
				<span>TOTAL</span>
				<span>${total}</span>
			</div>
		</main>
	);
}
