import styles from "./Header.module.css";
import { Home } from "react-feather";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.containerHeader}>
        <Link
          aria-label="Ir a la página principal"
          href="/"
        >
          <Home className={styles.logo} />
        </Link>
        <nav>
          <Link
            className={styles.link}
            href="/practicas/formulario"
          >
            Formulario
          </Link>
        </nav>
      </div>
    </header>
  );
}
