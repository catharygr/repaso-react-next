import styles from "./Header.module.css";
import { Home } from "react-feather";

export default function Header() {
  return (
    <header>
      <div className={styles.containerHeader}>
        <Home className={styles.logo} />
      </div>
    </header>
  );
}
