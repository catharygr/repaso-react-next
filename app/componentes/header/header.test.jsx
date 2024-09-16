import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Header from "./header";

test("Header, si se abre o no el menú", () => {
  // Renderizando el componente
  render(<Header />);
  // Comprabando si menu-orange no está en el documento
  expect(
    screen.queryByTestId(document.documentElement, "menu-orange")
  ).not.toBeInTheDocument();
  // Despachando el evento click en el boton de menú
  fireEvent.click(screen.getByTestId("menu-btn"));
  // comprobando si menu-orange está en el documento
  expect(screen.getByTestId("menu-orange")).toBeInTheDocument();
  // Despachando el evento click en el boton de menú
  fireEvent.click(screen.getByTestId("cerrar-btn"));
  // Comprobando si menu-orange no está en el documento
  expect(
    screen.queryByTestId(document.documentElement, "menu-orange")
  ).not.toBeInTheDocument();
});
