import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("has clickable button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("has custom title", () => {
    render(<App />);
    expect(screen.getByText(/Moja Aplikacja React/i)).toBeInTheDocument();
  });

  it("this test will fail", () => {
    render(<App />);
    expect(screen.getByText(/This text does not exist/i)).toBeInTheDocument();
  });
});
