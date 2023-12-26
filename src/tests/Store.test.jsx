import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import * as rrd from "react-router-dom";
import Store from "../components/Store/Store";

let categories = [
	"Men's Clothing",
	"Women's Clothing",
	"Jewelery",
	"Electronics",
];

vi.mock("react-router-dom", async (importOriginal) => {
	const mod = await importOriginal();
	const useParams = vi.fn();

	return {
		...mod,
		useParams,
	};
});

describe("Store omponent", () => {});
