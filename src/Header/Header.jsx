import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

let categories = [
	"Men's Clothing",
	"Women's Clothing",
	"Jewelery",
	"Electronics",
];

export default function Header() {
	let [active, setActive] = useState("");

	function handleChangingActiveCategory(cat) {
		setActive(cat);
	}

	return (
		<header className={styles.header}>
			<h1>
				<Link to="/">FAKKE STORE</Link>
			</h1>
			<ul>
				{categories.map((cat, i) => (
					<li
						key={cat}
						className={active === cat ? styles.active : ""}
						onClick={() => handleChangingActiveCategory(cat)}
					>
						<Link to={"/store/" + cat.toLowerCase()}>{cat}</Link>
					</li>
				))}
			</ul>
			<Link to="cart" className={styles.link}>
				<span>CART</span>
			</Link>
		</header>
	);
}
