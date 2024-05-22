import styles from "./Header.module.css";
import { Home } from "react-feather";

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <Home />
        <h1>My Blog</h1>
      </div>
    </header>
  );
}
