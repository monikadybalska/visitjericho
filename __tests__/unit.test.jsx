import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomepageHero from "../app/_components/homepage/hero";

describe("Page", () => {
  it("renders a heading", () => {
    render(<HomepageHero />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
