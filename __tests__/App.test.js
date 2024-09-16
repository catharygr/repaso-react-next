import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders React con Nextjs", () => {
  render(<Home />);
  const linkElement = screen.getByAltText(/React con Nextjs/);
  expect(linkElement).toBeInTheDocument();
});
