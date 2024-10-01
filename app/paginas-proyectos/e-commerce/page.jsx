import styles from "./e-commerce.module.css";
import Image from "next/image";
import ecoImg from "../../utilidades/imagenes/mi-tienda.png";

export default function Ecommerce() {
  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <main className={styles.container}>
      <div className={styles.contenido}>
        <h1 className={styles.h1}>E-commerce</h1>
        <p className={styles.p}>
          ¡Bienvenido a E-commerce: Mi tienda! Este proyecto, lo he desarrollado
          con el framework Open Cells de BBVA, utilizando la librería LitElement
          y Material Design para crear una experiencia de usuario fluida y
          atractiva, tanto en ordenadores como en dispositivos móviles. Entre
          las principales características se incluyen una búsqueda integrada, un
          menú tipo hamburguesa para móviles, gestión de favoritos, un carrito
          de compras, soporte para temas de color personalizados y la opción de
          traducir el contenido del español al inglés. Como backend, he
          utilizado Firebase para datos y autenticación, y he desplegado la
          aplicación en Netlify para su acceso en vivo.
        </p>
        <div className={styles.infoStrong}>
          <p>
            <strong>Autor:</strong>&nbsp;Catary García Rivas •{" "}
            <strong>Categoría:</strong>&nbsp;Servicios •{" "}
            <strong>Publicación:</strong>&nbsp;07/6/2024 •{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <article className={styles.contenidoDerecho}>
          <h2 className={styles.h2}>Mi papel en el proyecto</h2>
          <p>
            Investigar y aprender sobre la tecnologías como Open Cells,
            LitElement y Web Components en general. Diseñar y desarrollar una
            aplicación utilizando Material Design y CSS personalizado.
            Documentar el proceso de aprendizaje y desarrollo. Resolver
            problemas y depurar errores durante el desarrollo.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>
            Open Cells: Es un framework de desarrollo de aplicaciones web de
            código abierto desarrollado por BBVA. Utiliza canales de
            comunicación basados en la librería RxJS, y LitElement para las
            páginas web. Tiene su propio router y i18n para la
            internacionalización.
          </p>
          <p>
            LitElement: Es una librería de desarrollo de aplicaciones web basada
            en Web Components. Permite crear componentes web reutilizables y
            personalizables con un enfoque en la simplicidad y el rendimiento.
          </p>
          <p>
            Material Design: Es un sistema de diseño desarrollado por Google que
            se centra en la creación de interfaces de usuario. Proporciona una
            serie de directrices y componentes para facilitar el diseño y
            desarrollo de aplicaciones web y móviles.
          </p>
          <p>
            JSON Server & Firebase: Se ha utilizado como servidor durante
            desarrollo. Luego he pasado los datos y la autenticación a Firebase
            y he publicado la app en Netlify.
          </p>

          <p>
            Git & GitHub: Commits, Branches, Merge, Restore, Push. También
            conexión con Netlify para despliegue continuo.
          </p>
        </article>
        <div className={styles.colorMedio}></div>
        <aside className={styles.contendioIzquierdo}>
          <Image
            className={styles.img}
            src={ecoImg}
            alt="Imagen de la página web de E-commerce"
          />

          <h3 className={styles.h3}>E-commerce</h3>

          <p>
            Herramientas: Open Cells LitElement Material Design CSS & HTML
            Javascript ES6 Firebase Git & GitHub Netlify.
          </p>
          <h3 className={styles.h3}>Propósito del proyecto</h3>
          <p>
            He intentado desarrollar una buena experiencia de usuario mediante
            una interfaz intuitiva y responsiva, que se adapte tanto a
            dispositivos de escritorio como móviles. He incluido la navegación,
            búsqueda de productos y gestión de los mismos para el usuario admin.
          </p>
          <h3 className={styles.h3}>Lecciones aprendidas</h3>
          <p>
            Durante el desarrollo de este proyecto, he aprendido mucho sobre el
            framework Open Cells, así como sobre el desarrollo de aplicaciones
            web con las librerías LitElement y Material Design.
          </p>
        </aside>
      </div>
    </main>
  );
}
