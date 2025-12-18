import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

jest.mock("./components/Header", () => () => <div>Header Component</div>);
jest.mock("./components/Main", () => () => <div>Main Component</div>);
jest.mock("./components/Footer", () => () => <div>Footer Component</div>);

describe("App component", () => {
  test("renders Header, Main, and Footer components", () => {
    render(<App />);

    expect(screen.getByText("Header Component")).toBeInTheDocument();
    expect(screen.getByText("Main Component")).toBeInTheDocument();
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("uses semantic layout elements for accessibility", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});