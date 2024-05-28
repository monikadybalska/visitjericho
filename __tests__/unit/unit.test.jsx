import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroButton from "../../app/_components/homepage/hero-button";
import Footer from "./../../app/_components/footer";

describe("Footer", () => {
  beforeEach(() => render(<Footer />));
  it("renders a heading", () => {
    const headings = screen.getAllByRole("heading", { level: 2 });

    expect(headings[0]).toBeInTheDocument();
  });
});

describe("Hero button", () => {
  beforeEach(() => render(<HeroButton href="#" />));
  it("renders a button", async () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
