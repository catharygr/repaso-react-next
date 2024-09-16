import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Formulario from "../app/practicas/formulario";

test("focus and blur input", () => {
  render(<Formulario />);
  const input = screen.getByTestId("element-to-focus");

  input.focus();
  expect(input).toHaveFocus();

  input.blur();
  expect(input).not.toHaveFocus();
});
