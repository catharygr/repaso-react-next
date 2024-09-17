import Image from "next/image";
import PlantaTres from "../../../public/imagen/planta-3.svg";
import styles from "./portafolio.module.css";

export default function Portafolio() {
  return (
    <section>
      <div>
        <Image
          className={styles.plantaTres}
          src={PlantaTres}
          alt="Planta 3"
        />
        <h1>Portafolio personal</h1>
        <p>
          Mi Proyecto Portafolio es como mi tarjeta de presentación digital, un
          rincón donde puedo mostrar al mundo mis creaciones y mi viaje en el
          universo de la programación. Antes de esta página web, habia
          desarrollado otra con HTML, CSS y JavaScript. Al terminar las
          enseñanzas de este último bootcamp, he decidido construir una nueva
          plataforma utilizando React y Next.js. Aquí muestro con orgullo cada
          proyecto que he creado a lo largo de tres años de constante
          aprendizaje. Aunque no se recomienda incluir el propio portafolio como
          un proyecto, ¿Por qué no desafiar un poco las normas y mostrar lo que
          he logrado?
        </p>
      </div>
    </section>
  );
}
