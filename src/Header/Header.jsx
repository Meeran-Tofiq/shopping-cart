let categories = [
	"Men's Clothing",
	"Women's Clothing",
	"Jewelry",
	"Electronics",
];

export default function Header({ category }) {
	return (
		<header>
			<h1>FAKKE STORE</h1>
			<ul>
				{categories.map((cat) => (
					<li key={cat} className="">
						{cat}
					</li>
				))}
			</ul>
		</header>
	);
}
