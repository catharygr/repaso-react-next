import Image from "next/image";
import styles from "./CardProyecto.module.css";
import Link from "next/link";

export default function CardProyecto({ contenido }) {
  const { titulo, descripcion, img, url } = contenido;

  return (
    <Link
      href={url}
      className={styles.container}
    >
      <div className={styles.card}>
        <Image
          src={img}
          alt="Imagen del proyecto"
          className={styles.cardImg}
        />
        <div className={styles.cardContainer}>
          <h2 className={styles.h2}>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </Link>
  );
}
