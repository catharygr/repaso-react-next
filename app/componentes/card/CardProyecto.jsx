import Image from "next/image";
import styles from "./CardProyecto.module.css";

export function CardProyecto({ contenido }) {
  const { titulo, descripcion, img } = contenido;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={img}
          alt="Imagen del proyecto"
        />
        <div>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
