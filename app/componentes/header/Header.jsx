"use client";
import styles from "./Header.module.css";
import { Home, Menu } from "react-feather";
import Link from "next/link";
import VisualHidden from "@/app/utilidades/VisualHidden";
import { AnimatePresence } from "framer-motion";
import useToggle from "@/app/utilidades/useToggle";
import NavMenu from "@/app/componentes/menu/NavMenu";

export default function Header() {
  const [menuLink, setMenuLink] = useToggle(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          aria-label="Ir a la página principal"
          href="/"
        >
          <Home
            size={40}
            color="tomato"
          />
        </Link>
        <nav
          role="navigation"
          aria-label="Menu principal"
        >
          <button
            aria-expanded={menuLink}
            className={styles.btnMenu}
            onClick={setMenuLink}
          >
            <Menu
              aria-hidden="true"
              focusable="false"
              className={styles.iconMenu}
              size={40}
              color="tomato"
              strokeWidth={4}
            />
            <VisualHidden>Abrir el menú</VisualHidden>
          </button>
          <AnimatePresence>
            {menuLink && <NavMenu setMenuLink={setMenuLink} />}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
