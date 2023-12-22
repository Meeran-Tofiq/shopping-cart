import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import CartPage from "../components/CartPage/CartPage";
import * as rrd from "react-router-dom";

vi.mock("react-router-dom", async (importOriginal) => {
	const mod = await importOriginal();
	let mockedReturnArray = [];
	const setMockedReturnedArray = (arr) => (mockedReturnArray = arr);
	return {
		...mod,
		mockedReturnArray,
		setMockedReturnedArray,
		useOutletContext: () => {
			return [mockedReturnArray, setMockedReturnedArray];
		},
	};
});

describe("Cart Page component loading", () => {
	it("renders an empty cart message when the cart is empty", () => {
		rrd.setMockedReturnedArray([]);
		render(<CartPage />);
		expect(screen.getAllByRole("heading")[0].textContent).toMatch("Uh oh...");
		expect(screen.getAllByRole("heading")[1].textContent).toMatch(
			"Your cart appears to be empty... Head to the shop to fill it up!"
		);
	});

	it("renders the cart full of products when provided", () => {
		const product = {
			id: 33,
			image: "blahblah",
			title: "Title",
			price: 99,
			description: "You are here, and so am I.",
			quantity: 1,
		};

		rrd.setMockedReturnedArray([product]);

		render(<CartPage />);
		expect(screen.getByRole("heading").textContent).toBe(product.title);
		expect(screen.getByTestId("product-quantity").textContent).toBe(
			product.quantity + ""
		);
	});
});
