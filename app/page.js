import Carousel from "./componentes/carousel/Carousel";
import { OtrosProyectos } from "./componentes/otrosProyectos/OtrosProyectos";
import { Profesionalidad } from "./componentes/profesionalidad/Profesionalidad";
import { ProyectosSeleccionados } from "./componentes/proyectosSeleccionados/ProyectosSeleccionados";
import Regadera from "../public/imagen/regadera.svg";
import styles from "./page.module.css";
import { carouselData } from "./utilidades/tarjetas.jsx";

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
      <ProyectosSeleccionados contenido={carouselData} />
    </main>
  );
}
