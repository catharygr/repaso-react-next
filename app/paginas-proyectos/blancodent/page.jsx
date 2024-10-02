import styles from "./blancodent.module.css";
import Image from "next/image";
import blancImg from "../../utilidades/imagenes/blancodent-tarjeta.jpg";

export default function Blancodent() {
  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <main className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>Clínica Dental Blancodent</h1>
        <p className={styles.p}>
          La web de la Clínica Dental Blancodent estaba publicada en squarespace
          con una de sus plantilla y el diseño bien modificada. El deseo del
          cliente era de mover la web a otra plataforma y en el proceso hacer
          cambios en la organización del contenido, implementar un blog con un
          nuevo CMS y finalmente introducir una tienda online para poder ofrecer
          a los clientes descuentos y venta de servicios online.
        </p>
        <div className={styles.infoStrong}>
          <p>
            <strong>Autor:</strong>&nbsp;Catary García Rivas •{" "}
            <strong>Categoría:</strong>&nbsp;Servicios •{" "}
            <strong>Publicación:</strong>&nbsp;06/9/2024 •{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <article className={styles.contenidoDerecho}>
          <h2 className={styles.h2}>Mi papel en el proyecto</h2>
          <p>
            Mi papel en este proyecto ha sido encargarme de analizar el diseño
            actual y transferirlo al nuevo código utilizando las últimas
            tecnologías de CSS.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>
            Teniendo el diseño existente en la primera fase nos hemos enfocado
            en lo siguiente:
          </p>
          <p>
            HTML: El uso de las etiquetas semánticas como section, main,
            article, nav... con la intención de hacer la página accesible desde
            las primeras líneas del nuevo código.
          </p>
          <p>
            CSS: utilización de Flexbox y Grid por defecto para organizar layout
            y transferir el diseño. Uso intensivo de variables CSS (con valores
            por defecto) y de las clases útiles. Nuevas seudo clases como por
            ejemplo :where() y :clamp().
          </p>
          <p>
            Uso de las propiedades modernas como backdrop-filter, margin-inline,
            aspect-ratio…
          </p>
          <p>
            JS: Implementación de la navegación tipo hamburger en pantallas
            pequeñas vía aria-hidden: y aria-selected: atributos para que sea
            accesible vía teclado. También implementación de un carrusel en la
            sección de hero con promociones.
          </p>
          <p>
            Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y
            con pull request via GitHub.
          </p>
          <p>Netlify: Conexión y deploy vía GitHub.</p>
        </article>
        <div className={styles.colorMedio}></div>
        <aside className={styles.contendioIzquierdo}>
          <Image
            className={styles.img}
            src={blancImg}
            alt="Imagen de la página web"
          />

          <h3 className={styles.h3}>Clínica Dental Blancodent</h3>

          <p>Herramientas: CSS & HTML Javascript ES6 Git & GitHub Netlifly.</p>
          <h3 className={styles.h3}>Propósito del proyecto</h3>
          <p>
            En el proceso únicamente se ha añadido un nuevo segmento hero con
            varias ofertas, la cual ayudará con la reorganización de la web e
            implementación de un CMS.
          </p>
          <h3 className={styles.h3}>Lecciones aprendidas</h3>
          <p>
            Revisar frecuentemente, si estamos avanzando en la dirección
            correcta que necesitan nuestros clientes o si requiere que nos
            adaptemos a ellos.
          </p>
        </aside>
      </div>
    </main>
  );
}
