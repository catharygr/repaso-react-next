import Image from "next/image";
import styles from "./CardProyecto.module.css";

export function CardProyecto({ contenido }) {
  const { titulo, descripcion, img } = contenido;
  console.log(contenido);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={img}
          alt="Imagen del proyecto"
          className={styles.cardImg}
        />
        <div>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
