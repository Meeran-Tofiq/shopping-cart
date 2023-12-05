import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<main>
			<div>
				<h1>FAKKE STORE</h1>
				<h3>
					<Link to="store/jewelry">Store Page</Link>
				</h3>
			</div>
		</main>
	);
}
