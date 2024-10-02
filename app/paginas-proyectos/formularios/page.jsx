import styles from "./formularios.module.css";
import Image from "next/image";
import formImg from "../../utilidades/imagenes/multipagina-tarjeta.png";

export default function Formularios() {
  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <main className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>Formularios</h1>
        <p className={styles.p}>
          Esta aplicación sirve como un proyecto de ejercicio con el propósito
          de construir un formulario de varias páginas con autenticación en
          Firebase, almacenamiento y la integración de una base de datos como
          infraestructura backend. Básicamente, simula el proceso de solicitud
          para una oferta de trabajo.
        </p>
        <div className={styles.infoStrong}>
          <p>
            <strong>Autor:</strong>&nbsp;Catary García Rivas •{" "}
            <strong>Categoría:</strong>&nbsp;Servicios •{" "}
            <strong>Publicación:</strong>&nbsp;23/7/2024 •{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <article className={styles.contenidoDerecho}>
          <h2 className={styles.h2}>Mi papel en el proyecto</h2>
          <p>
            Este proyecto me proporcionó una valiosa experiencia en el
            desarrollo frontend utilizando tecnologías modernas como Vite y
            React. Además, aprendí a integrar Firebase para autenticación y
            almacenamiento de datos, lo que mejora la interacción en tiempo real
            y la seguridad del usuario.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>Vite: Entorno de desarrollo rápido para aplicaciones web.</p>
          <p>
            React: Biblioteca de JavaScript para construir interfaces de
            usuario.
          </p>
          <p>
            Firebase Realtime Database: Almacena datos en tiempo real para el
            formulario.
          </p>
          <p>
            Firebase Storage: Permite la carga y descarga de archivos
            relacionados con ofertas.
          </p>
          <p>
            React-feather: Una librería que proporciona una colección de iconos
            SVG. Esta librería se utiliza para mejorar la estética de la
            aplicación y facilitar la inclusión de iconos en diferentes partes
            de la interfaz de usuario.
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
            src={formImg}
            alt="Imagen del Portafolio"
          />

          <h3 className={styles.h3}>Formularios</h3>

          <p>
            Herramientas: CSS & HTML Javascript ES6 React Firebase Git & GitHub
            Netlifly.
          </p>
          <h3 className={styles.h3}>Propósito del proyecto</h3>
          <p>
            Este espacio representa una plataforma donde puedo exhibir mis
            habilidades y conocimientos en programación, así como expresar mis
            intereses a través de artículos y escritos.
          </p>
          <h3 className={styles.h3}>Lecciones aprendidas</h3>
          <p>
            Estas experiencias me han enseñado la importancia de la
            perseverancia y la preparación para superar los desafíos técnicos.
          </p>
        </aside>
      </div>
    </main>
  );
}
