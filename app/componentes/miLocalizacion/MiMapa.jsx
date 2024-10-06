import styles from "./MiMapa.module.css";
import Image from "next/image";
import Mapa from "../../../public/imagen/mapa.jpeg";
import Link from "next/link";
export default function MiMapa() {
  const handleClickApple = () => {
    window.open("https://maps.apple.com/?ll=28.1248,-15.431", "_blank");
  };
  const handleClickGoogle = () => {
    window.open(
      "https://www.google.com/maps/place/Las+Palmas+de+Gran+Canaria",
      "_blank"
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.contenido}>
        <div className={styles.columnIzq}>
          <h1 className={styles.h1}>EL mapa</h1>
          <p className={styles.p}>
            {" "}
            <strong> Mi ubicación:</strong> Las Palmas de Gran Canaria.
          </p>
          <p className={styles.p}>
            <strong>Teléfono:</strong>{" "}
            <button className={styles.btnTelef}>Tel: 666 666 666</button>
          </p>
          <div className={styles.containerBtn}>
            <Link
              onClick={handleClickApple}
              className={styles.btnMapa}
            >
              Abrir en Apple maps
            </Link>
            <button
              onClick={handleClickGoogle}
              className={styles.btnMapa}
            >
              Abrir en Google maps
            </button>
          </div>
        </div>

        <Image
          className={styles.imgMapa}
          src={Mapa}
          alt="Mapa de la isla de Gran Canaria"
        />
      </div>
    </div>
  );
}
