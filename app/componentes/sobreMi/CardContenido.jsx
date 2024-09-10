import Image from "next/image";
import Cebra from "../../public/images/cebra.svg";
import styles from "./CardContenido.module.css";

export function CardContenido() {
  <div className={styles.container}>
    <div className={styles.card}>
      <Image
        src={Cebra}
        alt="Imagen de una cebra"
        width={200}
        height={200}
      />
      <div className={styles.cardContainer}>
        <h2 className={styles.h2}>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  </div>;
}
