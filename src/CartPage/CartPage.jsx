import { useOutletContext } from "react-router-dom";

export default function CartPage() {
	const [cartItems, setCartItems] = useOutletContext();

	if (isEmpty(cartItems)) {
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
	const total = Object.values(cartItems).reduce(
		(acc, item) => acc + item.price * item.quantity
	);

	function increaseQuantityOfItem(item, amount = 1) {
		let obj = Object.values(cartItems).find(
			(elem) => elem.title === item.title
		);
		if (obj) {
			obj.quantity += amount;
		}
	}

	function decreaseQuantityOfItem(item, amount = 1) {
		let obj = Object.values(cartItems).find(
			(elem) => elem.title === item.title
		);
		if (obj) {
			obj.quantity -= amount;
		}
	}

	function removeItemFromCart(item) {
		setCartItems(cartItems.filter((i) => i !== item));
	}

	return (
		<main>
			{
				<>
					<ul>
						(
						{cartItems.map((item) => (
							<li>
								<div>
									<img src={item.image} />
									<h2>{item.title}</h2>
									<span>{item.price}</span>
								</div>
								<div>
									<span>{item.price * item.quantity}</span>
									<button onClick={() => increaseQuantityOfItem(item)}>
										+
									</button>
									<button onClick={() => decreaseQuantityOfItem(item)}>
										-
									</button>
								</div>
								<button onClick={removeItemFromCart}>TRASH</button>
							</li>
						))}
						)
					</ul>
					<span>TOTAL</span>
					<span>{total}</span>
				</>
			}
		</main>
	);
}

function isEmpty(obj) {
	for (const prop in obj) {
		if (Object.hasOwn(obj, prop)) {
			return false;
		}
	}

	return true;
}
