import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Products from "../components/Products/Products";

vi.mock("../components/Card/Card", async (importOriginal) => {
	const Card = await importOriginal();

	return {
		default: ({ loading, id, product }) => {
			if (loading) {
				return <li key={id} className={styles.loading}></li>;
			}

			return (
				<li key={id}>
					<h1>{product.title}</h1>
					<span>${product.price}</span>
				</li>
			);
		},
	};
});

const useProductsURL = vi.fn();
const products = [
	{ title: "foo", price: 99 },
	{ title: "bar", price: 89 },
	{ title: "baz", price: 79 },
];

describe("products component", () => {
	it("renders products page when products are received", () => {
		useProductsURL.mockReturnValue({
			products: products,
			error: false,
			loading: false,
		});
		render(<Products category={"error"} useProductsURL={useProductsURL} />);

		expect(screen.getAllByRole("heading")[0].textContent).toBe("foo");
		expect(screen.getAllByRole("heading")[1].textContent).toBe("bar");
		expect(screen.getAllByRole("heading")[2].textContent).toBe("baz");
	});
});
