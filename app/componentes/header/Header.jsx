"use client";
import styles from "./Header.module.css";
import { Home, Menu } from "react-feather";
import Link from "next/link";
import VisualHidden from "@/app/utilidades/VisualHidden";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [menuLink, setMenuLink] = useState(false);
  return (
    <header>
      <div className={styles.containerHeader}>
        <Link
          aria-label="Ir a la página principal"
          href="/"
        >
          <Home className={styles.logo} />
        </Link>
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="Menu principal"
        >
          <button
            aria-expanded={menuLink}
            onClick={() => setMenuLink(!menuLink)}
            className={styles.btnMenu}
          >
            <Menu
              aria-hidden="true"
              className={styles.iconMenu}
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
