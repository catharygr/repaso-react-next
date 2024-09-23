import Carousel from "./componentes/carousel";
import OtrosProyectos from "./componentes/otrosProyectos";
import Profesionalidad from "./componentes/profesionalidad";
import ProyectosSeleccionados from "./componentes/proyectosSeleccionados";
import SobreMi from "./componentes/sobreMi";
import MiMapa from "./componentes/miLocalizacion";
import Regadera from "../public/imagen/regadera.svg";
import styles from "./page.module.css";
import { carouselData } from "./utilidades/tarjetas.jsx";
import { contenidoData } from "./utilidades/tarjetas.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${Regadera.src})`,
      }}
      className={styles.main}
    >
      <div className={styles.containerCarousel}>
        <h1 className={styles.h1}>Prácticas de React con Nextjs</h1>
        <Carousel />
      </div>
      <OtrosProyectos />
      <Profesionalidad />
      <ProyectosSeleccionados contenido={carouselData} />
      <SobreMi contenido={contenidoData} />
      <MiMapa />
    </main>
  );
}
