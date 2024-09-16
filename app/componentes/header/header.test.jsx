import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "./header";

describe("Header, si se abre o no el menú", () => {
  render(<Header />);
  expect(screen.getByTestId("menu-orange")).not.toBeInTheDocument();
});
