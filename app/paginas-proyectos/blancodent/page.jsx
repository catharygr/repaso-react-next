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
            He sido de mucha ayuda y estoy contenta con el trabajo que he hecho
            y con los errores que he cometido como principiante. Una buena
            experincia en este mundo de la codificación.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>
            A base del diseño que he recibido, he decidido usar las siguientes
            herramientas para los componentes que contienen layout:
          </p>
          <p>
            CSS: He ustilizado display grid y flex, para algunos componentes, he
            usado container-query que permite aplicar estilos a un elemento en
            función del tamaño del contenedor del elemento. Las fuentes
            variables la hemos usados para declaraciones de propiedades
            personalizadas de titulos y párrafos.
          </p>
          <p>
            React: Componentes, props, formularios con estado, useEffect,
            useStates, createContext, useRef, createContext. Con el uso de los
            componentes separamos el interfaz de usuario, reutilizándolos
            pasandoles props. El formulario como un componente controlado. Usos
            de los hook ms usados en react para una mejor renderización de la
            web.
          </p>
          <p>
            React router: Usando rutas nidadas, rutas relativas, Outles, Link,
            NavLink, parámetros de búsquedas, useLocation, redering condicional,
            useNavigate.
          </p>
          <p>
            Firebase Iniciación de la app, colección, getFirestore, getDocs.
            Autentificar, onAuthStateChanged, signInWithEmailAndPassword etc...
          </p>
          <p>
            Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y
            con pull request via GitHub.
          </p>
          <p>
            Netlify: Envio de formulario, redirección por el pushstate en react,
            GitHub desplegado.
          </p>
        </article>
        <div className={styles.colorMedio}></div>
        <aside className={styles.contendioIzquierdo}>
          <Image
            className={styles.img}
            src={blancImg}
            alt="Imagen de la página web"
          />

          <h3 className={styles.h3}>Sarajevo Tours</h3>

          <p>
            Herramientas: CSS & HTML Javascript ES6 React React Router Firebase
            Git & GitHub Netlifly.
          </p>
          <h3 className={styles.h3}>Propósito del proyecto</h3>
          <p>
            Preparado en Figma para que todo fuera más fluido por mi compañero
            que tiene experiencia en esta app y beneficiándonos del trabajo en
            equipo.
          </p>
          <h3 className={styles.h3}>Lecciones aprendidas</h3>
          <p>
            Trabajar en equipo ha sido una gran enseñanza, es de mucha ventaja
            porque se reparte el trabajo y todo fluye de una manera organizada.
          </p>
        </aside>
      </div>
    </main>
  );
}
