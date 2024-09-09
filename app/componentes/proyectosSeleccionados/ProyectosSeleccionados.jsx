import styles from "./ProyectosSeleccionados.module.css";
import CardProyecto from "../card";

export function ProyectosSeleccionados({ contenido }) {
  console.log(contenido[0]);
  return (
    <section className={styles.containerExterior}>
      <h1 className={styles.h1}>Proyectos Seleccionados</h1>
      <div className={styles.containerInterior}>
        <div className="proyecto">
          {contenido.slice(0, 3).map((proyecto) => (
            <CardProyecto
              key={proyecto.id}
              contenido={proyecto}
            />
          ))}
        </div>
      </div>
      <button className={styles.boton}>Todos los proyectos </button>
    </section>
  );
}

{
  /* <div className={`wrapper flow ${styles.proyectoWrapper}`}>
<h2 className={styles.h2}>Últimos Proyectos</h2>
<div className={styles.cardsContainer}>
  {ultimosProyectos.map((proyecto) => (
    <Card
      key={proyecto.url}
      content={proyecto}
      type="conImg"
    />
  ))}
</div> */
}
