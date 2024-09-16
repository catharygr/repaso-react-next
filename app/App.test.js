import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders React con Nextjs", () => {
  render(<Home />);
  const { container } = screen(/React con Nextjs/);
  expect(container).toBeInTheDocument();
});
