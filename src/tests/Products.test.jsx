import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Products from "../components/Products/Products";

vi.mock("../components/Card/Card", async (importOriginal) => {
	const Card = await importOriginal();

	return {
		default: ({ loading, id, product }) => {
			if (loading) {
				return <li key={id}></li>;
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

	it("renders loading page when it is still loading", () => {
		useProductsURL.mockReturnValue({
			products: products,
			error: false,
			loading: true,
		});
		render(<Products category={"error"} useProductsURL={useProductsURL} />);

		expect(screen.getAllByRole("listitem").length).toBe(3);
		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
	});

	it("renders error page when an error occurs", () => {
		useProductsURL.mockReturnValue({
			products: products,
			error: true,
			loading: false,
		});
		render(<Products category={"error"} useProductsURL={useProductsURL} />);

		expect(screen.getByRole("heading").textContent).toBe("Oh no...");
		expect(
			screen.getByText("Please try again later...", { exact: false })
		).toBeInTheDocument();
	});
});
