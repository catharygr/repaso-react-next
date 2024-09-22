import styles from "./z-index.module.css";

export default function Zindex() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Z-index</h1>
      <div className={styles.zIndex}>
        <p>Hola</p>
        <p>Como estas</p>
        <p>Estoy bien</p>
      </div>
    </div>
  );
}
