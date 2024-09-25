import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.containerFooter}>
        <p className={styles.p}>
          Desarrollado en España por{" "}
          <Link href="https://bubulazi.com">Bubulazi</Link> <br /> ©{year}
        </p>
      </div>
    </footer>
  );
}
