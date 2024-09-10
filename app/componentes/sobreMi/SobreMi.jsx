import styles from "./SobreMi.module.css";
import Image from "next/image";
import Cebra from "../../../public/imagen/cebra.svg";
import { CardContenido } from "./CardContenido";

export function SobreMi({ contenido }) {
  return (
    <div className={styles.container}>
      <div className={styles.divisor}>
        <h1 className={styles.h1}>¿Por qué a mi?</h1>
        <Image
          src={Cebra}
          alt="Imagen de una cebra"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.cardsContenido}>
        {contenido.slice(0, 6).map((proyecto) => (
          <CardContenido
            key={proyecto.id}
            contenido={proyecto}
          />
        ))}
      </div>
    </div>
  );
}
