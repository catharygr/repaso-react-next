"use client";

import styles from "./Header.module.css";
import { Home, Menu } from "react-feather";
import Link from "next/link";

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
          </button>
          {/* <Link
            className={styles.link}
            href="/practicas/formulario"
          >
            Formulario
          </Link>
          <Link
            className={styles.link}
            href="/practicas/contador"
          >
            Contador
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
