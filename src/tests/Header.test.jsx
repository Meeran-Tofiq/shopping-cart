import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { vi } from "vitest";

let categories = [
	"Men's Clothing",
	"Women's Clothing",
	"Jewelery",
	"Electronics",
];

vi.mock("react-router-dom", async (importOriginal) => {
	const mod = await importOriginal();

	function Link({ children, to }) {
		return <a href={to}>{children}</a>;
	}

	return {
		...mod,
		Link,
	};
});

describe("Header component", () => {
	it("renders on page", () => {
		render(<Header />);

		expect(screen.getByRole("heading").textContent).toBe("FAKKE STORE");
	});

	it("renders all four categories on page", () => {
		render(<Header />);

		expect(screen.getByText(categories[0])).toBeInTheDocument();
		expect(screen.getByText(categories[1])).toBeInTheDocument();
		expect(screen.getByText(categories[2])).toBeInTheDocument();
		expect(screen.getByText(categories[3])).toBeInTheDocument();
	});
});
