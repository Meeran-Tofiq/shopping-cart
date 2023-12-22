import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("Footer component", () => {
	it("The credits is on page when rendered", () => {
		render(<Footer />);

		expect(screen.getByText("Made by", { exact: false })).toBeInTheDocument();
	});
});
