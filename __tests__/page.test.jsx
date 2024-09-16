import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Carousel from "../app/componentes/carousel/Carousel";
// import Formulario from "../app/practicas/formulario";

test(" renders Cualquier pregunta aquí p", () => {
  render(<Carousel />);
  const linkElement = screen.getByText(/Cualquier pregunta aquí/i);
  expect(linkElement).toBeInTheDocument();
});
