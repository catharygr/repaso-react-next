import styles from "./Carousel.module.css";
import Image from "next/image";
import girafa from "../../assets/imagen/girafa.svg";
import { Codepen } from "react-feather";
import Link from "next/link";
import ProyectoIndividual from "../../componentes/proyectoIndividual/ProyectoIndividual.jsx";
import { useState } from "react";

export default function Carousel() {
  const [esMostradoContenido, setEsMostradoContenido] = useState(false);
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
      <div className={styles.contenidoIconos}>
        <ul className={styles.contenidoUl}>
          <li className={styles.contenidoLi}>
            <Codepen />
            <ProyectoIndividual />
          </li>
          <li className={styles.contenidoLi}>
            <Codepen />
          </li>
          <li className={styles.contenidoLi}>
            <Codepen />
            <p>
              <Link
                target="_blank"
                href={"https://multipage-form-caty.netlify.app"}
              >
                Formulario multi-página
              </Link>
            </p>
          </li>
          <li className={styles.contenidoLi}>
            <Codepen />
            <p></p>
          </li>
          <li className={styles.contenidoLi}>
            <Codepen />
            <p></p>
          </li>
          <li className={styles.contenidoLi}>
            <Codepen />
            <p></p>
          </li>
        </ul>
      </div>
    </section>
  );
}
