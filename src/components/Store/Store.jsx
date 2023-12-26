import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import styles from "./Store.module.css";

export default function Store() {
	let { category } = useParams();

	return (
		<>
			<main className={styles.main}>
				<h1 className={styles.heading}>{category.toUpperCase()}</h1>
				<Products category={category}></Products>
			</main>
		</>
	);
}
