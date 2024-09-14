import { render, screen } from "@testing-library/react";
import Home from "./page";

test("render learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
