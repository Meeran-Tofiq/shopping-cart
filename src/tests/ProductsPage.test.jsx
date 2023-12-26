import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ProductPage from "../components/ProductPage/ProductPage";
import * as rrd from "react-router-dom";

vi.mock("react-router-dom", async (importOriginal) => {
	const mod = await importOriginal();

	const product = {
		id: 33,
		image: "blahblah",
		title: "Title",
		price: 99,
		description: "You are here, and so am I.",
	};
	let state = { product };

	// mock useOutletContext hook
	let mockedArray = [];
	const setMockedArray = vi.fn();
	setMockedArray.mockImplementation((arr) => (mockedArray = arr));

	// mock Link component
	function Link({ children, to }) {
		return <a href={to}>{children}</a>;
	}

	// mock ueLocation hook
	function useLocation() {
		return { state };
	}

	// make a method to set the return object of the useLocation hook
	function setProduct(prod) {
		state.product = prod;
	}

	return {
		...mod,
		Link,
		useLocation,
		setProduct,
		mockedArray,
		setMockedArray,
		useOutletContext: () => {
			return [mockedArray, setMockedArray];
		},
	};
});

describe("Product page", () => {
	it("renders product on page", () => {
		render(<ProductPage />);

		expect(screen.getByRole("img").getAttribute("src")).toBe("blahblah");
		expect(screen.getByRole("heading").textContent).toMatch("Title");
		expect(screen.getByText("$99")).toBeInTheDocument();
		expect(screen.getByText("You are here, and so am I.")).toBeInTheDocument();
	});
});

describe("product quantity", () => {
	it("increases quantity by pressing the '+' button", async () => {
		const user = userEvent.setup();

		render(<ProductPage />);
		const button = screen.getByRole("button", { name: "+" });

		expect(screen.getByTestId("quantity").textContent).toBe("0");
		await user.click(button);
		expect(screen.getByTestId("quantity").textContent).toBe("1");
	});

	it("decreases quantity by pressing the '-' button", async () => {
		const user = userEvent.setup();

		render(<ProductPage />);
		const plusBtn = screen.getByRole("button", { name: "+" });
		const minusBtn = screen.getByRole("button", { name: "-" });

		await user.click(plusBtn);
		expect(screen.getByTestId("quantity").textContent).toBe("1");
		await user.click(minusBtn);
		expect(screen.getByTestId("quantity").textContent).toBe("0");
	});
});
