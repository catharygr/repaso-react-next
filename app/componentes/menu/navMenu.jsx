"use client";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.css";
import { useId, useState } from "react";

export default function NavMenu({ setMenuLink }) {
  const [menuHamburguer, setMenuHamburguer] = useState(null);
  const pathname = usePathname;
  const id = useId();

  useEffect(() => {
    const elementoEnfocadoAntesDeAbrirlo = document.activeElement;
    return () => {
      elementoEnfocadoAntesDeAbrirlo?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setMenuLink();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setMenuLink]);

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Formulario</a>
        </li>
        <li>
          <a href="/">Contador</a>
        </li>
      </ul>
    </nav>
  );
}
