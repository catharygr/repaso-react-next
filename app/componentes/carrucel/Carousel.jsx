import styles from "./Carousel.module.css";
import Image from "next/image";
import girafa from "../carrucel/assets/imagen/girafa.svg";
import { Codepen } from "react-feather";

export default function Carousel() {
  return (
    <section className={styles.containerCarousel}>
      <div className={styles.contenidoSuperiorColor}></div>
      <div className={styles.contenidoSuperior}>
        <h2>Todos los conocimientos</h2>
        <h3>Herramientas</h3>
        <p>
          ¡Hola! Iniciada en el mundo de la programación como junior, con muchas
          ganas de llevar a cabo todo lo aprendido en diferentes bootcamps, como
          en las plataformas interactivas: Qualentum, Josh W Comeau's, Practical
          Accessibility con Sara Soueidan, Platzi, Scrimba, FreeCodeCamp.
        </p>
        <button>Más información</button>
      </div>
      <div className={styles.contenidoBotonesControl}>
        <button>Más</button>•<button>Más</button>
      </div>
      <Image
        className={styles.imgCarousel}
        src={girafa}
        alt="Imagen de una girafa"
      />
      <p>Cualquier pregunta aquí</p>
      <div className={styles.contenidoIconos}>"</div>
    </section>
  );
}
