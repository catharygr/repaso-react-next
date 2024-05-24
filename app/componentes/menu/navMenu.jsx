"use client";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.css";
import { useId, useState } from "react";

export default function NavMenu() {
  const [menuHamburguer, setMenuHamburguer] = useState(null);
  const pathname = usePathname;
  const id = useId();

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
