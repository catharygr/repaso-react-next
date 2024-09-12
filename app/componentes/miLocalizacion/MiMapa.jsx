import styles from "./MiMapa.module.css";
import Image from "next/image";
import Mapa from "../../../public/imagen/mapa.svg";
export default function MiMapa() {
  return (
    <div className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>EL mapa</h1>
        <p>Mi ubicación</p>
        <p>Las Palmas de G.C.</p>
        <p>Teléfono: 666 666 666</p>

        <button>Abrir en Apple maps</button>
        <button>Abrir en Google maps</button>
      </div>
      <div className={styles.imgMapa}>
        <Image src={Mapa} />
      </div>
    </div>
  );
}
