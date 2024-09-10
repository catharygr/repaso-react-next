import styles from "./CardContenido.module.css";

export function CardContenido({ contenido }) {
  const { titulo, descripcion } = contenido;
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <h2 className={styles.h2}>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  </div>;
}
