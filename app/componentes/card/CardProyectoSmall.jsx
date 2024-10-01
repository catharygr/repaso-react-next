import styles from "./CardProyectoSmall.module.css";
import Link from "next/link";

export default function CardProyectoSmall({ contenido }) {
  const { titulo, descripcion, url } = contenido;

  return (
    <Link
      href={url}
      className={styles.container}
    >
      <div className={styles.cardSmall}>
        <div className={styles.cardContainer}>
          <h2 className={styles.h2}>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </Link>
  );
}
