import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Homepage from "../components/Homepage/Homepage";

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

describe("Homepage component", () => {
	it("renders on page", () => {
		render(<Homepage />);

		expect(screen.getByText("Store Page")).toBeInTheDocument();
	});
});
