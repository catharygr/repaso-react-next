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
        <h1 className={styles.h1}>ChatGPT - App</h1>
        <p className={styles.p}>
          Conexión con la API de OpenAI para crear un chatbot. Firebase RealTime
          Database para Back-end y Auth. Netlify env variable para ocultar API
          key. Netlify función para conectar con OpeAI y obtener las respuestas.
        </p>
        <div className={styles.infoStrong}>
          <p>
            <strong>Autor:</strong>&nbsp;Catary García Rivas •{" "}
            <strong>Categoría:</strong>&nbsp;Servicios •{" "}
            <strong>Publicación:</strong>&nbsp;03/4/2024 •{" "}
            <strong>Actualización:</strong>&nbsp;{today}
          </p>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <article className={styles.contenidoDerecho}>
          <h2 className={styles.h2}>Mi papel en el proyecto</h2>
          <p>
            Durante el Curso de Inteligencia Artificial en la Plataforma
            Scrimba, adquirí habilidades en el desarrollo de aplicaciones web
            interactivas con funcionalidades avanzadas. Aprendí a implementar
            chatbots inteligentes, búsqueda de películas y procesamiento de
            imágenes utilizando Firebase Database Realtime y autenticación.
          </p>
          <h2 className={styles.h2}>Web stack y su explicación</h2>
          <p>
            Visual Studio Code: Utilizado como el principal entorno de
            desarrollo para escribir y organizar el código de la aplicación.
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
            Netlify: Integrado con GitHub para la implementación continua de la
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

          <h3 className={styles.h3}>ChatGPT</h3>

          <p>
            Herramientas: CSS & HTML Javascript ES6 Figma Git & GitHub Netlify
          </p>
          <h3 className={styles.h3}>Propósito del proyecto</h3>
          <p>
            Mi enfoque se centra en la creación de aplicaciones innovadoras y
            experienciales, utilizando tecnologías como React para construir
            interfaces intuitivas y atractivas.
          </p>
          <h3 className={styles.h3}>Lecciones aprendidas</h3>
          <p>
            Aprendí a gestionar claves de API y proteger la seguridad de los
            datos al utilizar Netlify para guardar la OPE key
          </p>
        </aside>
      </div>
    </main>
  );
}
