import { render, screen, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Card from "../components/Card/Card";
import { BrowserRouter } from "react-router-dom";

describe("Card component", () => {
	it("renders loading component when loading is set to true", () => {
		render(<Card loading={true} id={3} />);
		expect(screen.getByRole("listitem").children.length).toBe(0);
	});

	it("renders a card when given a product object", () => {
		const product = {
			id: 33,
			image: "blahblah",
			title: "Title",
			price: 99,
			description: "You are here, and so am I.",
		};

		render(
			<BrowserRouter>
				<Card loading={false} id={product.id} product={{ ...product }} />
			</BrowserRouter>
		);

		expect(screen.getByRole("img")).toHaveAttribute("src", product.image);
		expect(screen.getByRole("heading").textContent).toMatch(product.title);
		expect(screen.getByText("$" + product.price)).toBeInTheDocument();
		expect(screen.getByText(product.description)).toBeInTheDocument();
	});
});
