import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomepageHero from "./../../app/_components/homepage/hero";

describe("Homepage hero", () => {
  beforeEach(() => render(<HomepageHero />));
  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders an image", () => {
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  it("renders a button", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
