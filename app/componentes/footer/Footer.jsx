import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.containerFooter}>
        <p className={styles.footer}>
          Desarrollado en España <br /> ©{year}
        </p>
      </div>
    </footer>
  );
}
