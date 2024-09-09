import Carousel from "./componentes/carousel/Carousel";
import { OtrosProyectos } from "./componentes/otrosProyectos/OtrosProyectos";
import { Profesionalidad } from "./componentes/profesionalidad/Profesionalidad";
import Image from "next/image";
import Regadera from "../public/imagen/regadera.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${Regadera.src})`,
      }}
      className={styles.main}
    >
      <h1 className={styles.h1}>Prácticas de React con Nextjs</h1>
      <Carousel />
      <OtrosProyectos />
      <Profesionalidad />
    </main>
  );
}
