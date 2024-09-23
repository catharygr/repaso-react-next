import styles from "./portafolio.module.css";
import Image from "next/image";
import imgPortafolio from "../../../public/imagen/portafolio.jpg";

export default function Portafolio() {
  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <section className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>Portafolio personal</h1>
        <p className={styles.p}>
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
        <div className={styles.infoStrong}>
          <p>
            <strong>Publicación:</strong>&nbsp;24/1/2024{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div>
        <div>
          <Image src={imgPortafolio} />
          <h2>Titulo</h2>
          <p>
            Herramientas: Next.js CSS & HTML Javascript ES6 Figma Git & GitHub
            Vercel
          </p>
          <h2>Propósito del proyecto</h2>
          <p>
            Este espacio representa una plataforma donde puedo exhibir mis
            habilidades y conocimientos en programación, así como expresar mis
            intereses a través de artículos y escritos.
          </p>
          <h2>Lecciones aprendidas</h2>
          <p>
            Estas experiencias me han enseñado la importancia de la
            perseverancia y la preparación para superar los desafíos técnicos.
          </p>
        </div>
        <div></div>
        <div>
          <h3></h3>
        </div>
      </div>
    </section>
  );
}
