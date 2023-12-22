import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import CartPage from "../components/CartPage/CartPage";
import * as rrd from "react-router-dom";

vi.mock("react-router-dom", async (importOriginal) => {
	const mod = await importOriginal();
	let mockedArray = [];
	const setMockedArray = vi.fn();

	setMockedArray.mockImplementation((arr) => (mockedArray = arr));

	return {
		...mod,
		mockedArray,
		setMockedArray,
		useOutletContext: () => {
			return [mockedArray, setMockedArray];
		},
	};
});

describe("Cart Page component loading", () => {
	it("renders an empty cart message when the cart is empty", () => {
		rrd.setMockedArray([]);
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

		rrd.setMockedArray([product]);

		render(<CartPage />);
		expect(screen.getByRole("heading").textContent).toBe(product.title);
		expect(screen.getByTestId("product-quantity").textContent).toBe(
			product.quantity + ""
		);
	});
});

describe("Cart component interactivity", () => {
	it("increases product quantity when you press the (+) button to increase quantity", async () => {
		const user = userEvent.setup();

		const product = {
			id: 33,
			image: "blahblah",
			title: "Title",
			price: 99,
			description: "You are here, and so am I.",
			quantity: 1,
		};

		rrd.setMockedArray([product]);

		render(<CartPage />);

		const button = screen.getByRole("button", { name: "+" });
		await user.click(button);

		expect(rrd.setMockedArray).toHaveBeenCalled();
	});

	it("increases product quantity when you press the (-) button to decrease quantity", async () => {
		const user = userEvent.setup();

		const product = {
			id: 33,
			image: "blahblah",
			title: "Title",
			price: 99,
			description: "You are here, and so am I.",
			quantity: 1,
		};

		rrd.setMockedArray([product]);

		render(<CartPage />);

		const button = screen.getByRole("button", { name: "-" });
		await user.click(button);

		expect(rrd.setMockedArray).toHaveBeenCalled();
	});

	it("increases product quantity when you press the (-) button to decrease quantity", async () => {
		const user = userEvent.setup();

		const product = {
			id: 33,
			image: "blahblah",
			title: "Title",
			price: 99,
			description: "You are here, and so am I.",
			quantity: 1,
		};

		rrd.setMockedArray([product]);

		render(<CartPage />);

		const button = screen.getByTestId("trash-button");
		await user.click(button);

		expect(rrd.setMockedArray).toHaveBeenCalled();
	});
});
