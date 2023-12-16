import Products from "../Products/Products";
import { useParams } from "react-router-dom";

export default function Store() {
	let { category } = useParams();

	return (
		<>
			<main>
				<h1>{category.toUpperCase()}</h1>
				<Products category={category}></Products>
			</main>
		</>
	);
}
