import { Link } from "react-router-dom";

let categories = [
	"Men's Clothing",
	"Women's Clothing",
	"Jewelery",
	"Electronics",
];

export default function Header({ category }) {
	return (
		<header>
			<h1>
				<Link to="/">FAKKE STORE</Link>
			</h1>
			<ul>
				{categories.map((cat, i) => (
					<li key={cat} className="">
						<Link to={"/store/" + cat.toLowerCase()}>{cat}</Link>
					</li>
				))}
			</ul>
			<Link to="cart">
				<span>CART</span>
			</Link>
		</header>
	);
}
