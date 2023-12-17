import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ loading, id, product }) {
	if (loading) {
		return <li key={id} className={styles.loading}></li>;
	}

	return (
		<Link to="./purchase" state={{ product: product }} className={styles.link}>
			<li key={id} className={styles.card}>
				<img src={product.image} />
				<div>
					<h2>{product.title}</h2>
					<span>${product.price}</span>
					<p>{product.description}</p>
				</div>
			</li>
		</Link>
	);
}
