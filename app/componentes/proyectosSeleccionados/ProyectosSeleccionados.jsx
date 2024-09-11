import styles from "./ProyectosSeleccionados.module.css";
import CardProyecto from "../card";

export default function ProyectosSeleccionados({ contenido }) {
  return (
    <section className={styles.proyectoWrapper}>
      <h1 className={styles.h1}>Proyectos Seleccionados</h1>

      <div className={styles.cardsContainer}>
        {contenido.slice(0, 3).map((proyecto) => (
          <CardProyecto
            key={proyecto.id}
            contenido={proyecto}
          />
        ))}
      </div>
      <button className={styles.boton}>Todos los proyectos </button>
    </section>
  );
}
