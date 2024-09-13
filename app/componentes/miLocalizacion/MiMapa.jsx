import styles from "./MiMapa.module.css";
import Image from "next/image";
import Mapa from "../../../public/imagen/mapa.svg";
export default function MiMapa() {
  return (
    <div className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>EL mapa</h1>
        <p>
          {" "}
          <strong> Mi ubicación:</strong> Las Palmas de Gran Canaria.
        </p>
        <p>
          <strong>Teléfono:</strong>{" "}
          <button className={styles.btnTelef}>Tel: 666 666 666</button>
        </p>
        <div className={styles.containerBtn}>
          <button className={styles.btnMapa}>Abrir en Apple maps</button>
          <button className={styles.btnMapa}>Abrir en Google maps</button>
        </div>
      </div>
      <div className={styles.imgMapa}>
        <Image src={Mapa} />
      </div>
    </div>
  );
}
