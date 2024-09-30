import styles from "./chatgpt.module.css";
import Image from "next/image";
import portaImg from "../../utilidades/imagenes/chat-tarjeta.png";

export default function ChatGPT() {
  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <main className={styles.container}>
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
            <strong>Autor:</strong>&nbsp;Catary García Rivas •{" "}
            <strong>Categoría:</strong>&nbsp;Servicios •{" "}
            <strong>Publicación:</strong>&nbsp;24/1/2024 •{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <article className={styles.contenidoDerecho}>
          <h2 className={styles.h2}>Mi papel en el proyecto</h2>
          <p>
            Con lo aprendido en el Bootcamp de Qualentum y con 'Joy of React' de
            Joshua Comeau, he podido incorporar algunas ideas clave en la
            estructura y funcionalidad del sitio.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>
            Visual Studio Code: Utilizado como el principal entorno de
            desarrollo para escribir y organizar el código de la aplicación.
          </p>
          <p>
            Framework Nextjs: Empleado como el marco de trabajo principal para
            el desarrollo de la aplicación web, proporcionando características
            como el enrutamiento simplificado y el renderizado del lado del
            servidor (SSR).
          </p>
          <p>Figma: diseño de UI y UX.</p>
          <p>
            React: Componentes reutilizables, props. Uso de renderizado
            condicional. Control de formularios con estado a través de value y
            onChange. useEffect para uso secundario como el tema de los colores.
            El hook useState para el manejo de estado.
          </p>
          <p>
            CSS Modules: Utilizados para el encapsulamiento de estilos CSS
            dentro de componentes individuales, facilitando el mantenimiento y
            la reutilización del código
          </p>
          <p>
            Next-mdx-remote: Pendiente de implementar para el blog como la
            siguiente versión, la idea es que lea los archivos markdown desde el
            mismo servidor.
          </p>
          <p>
            Vercel: Integrado con GitHub para la implementación continua de la
            aplicación, permitiendo desplegar cambios de manera rápida y
            sencilla.
          </p>
          <p>
            Git y GitHub: Control de versiones y colaboración en el desarrollo
            del proyecto.
          </p>
        </article>
        <div className={styles.colorMedio}></div>
        <aside className={styles.contendioIzquierdo}>
          <Image
            className={styles.img}
            src={portaImg}
            alt="Imagen del Chat"
          />

          <h3 className={styles.h3}>Portafolio</h3>

          <p>
            Herramientas: Next.js CSS & HTML Javascript ES6 Figma Git & GitHub
            Vercel
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
