import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			Made by{" "}
			<a href="https://github.com/Meeran-Tofiq">
				Meeran Tofiq <i class="fa-brands fa-github" />
			</a>
		</footer>
	);
}
