import { render, screen } from "@testing-library/react";
import Home from "./page";

it("renders React con Nextjs", () => {
  const { container } = screen(<Home />);
  expect(container).toBeInTheDocument();
});
