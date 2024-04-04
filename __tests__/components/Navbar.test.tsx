import { render } from "@testing-library/react";
import { Navbar } from "@components/Navbar";

describe("Navbar component", () => {
	test("renders the Navbar component with correct elements", () => {
		const { getByAltText, findAllByRole, getByText } = render(<Navbar />);

		// Check if the logo is rendered
		expect(getByAltText("logo")).toBeInTheDocument();

		// Check if NavLinks are rendered
		expect(findAllByRole("listitem")).toHaveLength(3); // Adjust this based on your NAVBAR content

		// Check if Theme switch is rendered
		expect(getByText("THEME")).toBeInTheDocument();
	});
});
