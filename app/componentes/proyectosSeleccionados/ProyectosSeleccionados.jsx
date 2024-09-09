import styles from "./ProyectosSeleccionados.module.css";

export function ProyectosSeleccionados() {
  return (
    <section className={styles.containerExterior}>
      <h1 className={styles.h1}>Proyectos Seleccionados</h1>
      <div className={styles.containerInterior}>
        <div className="proyecto"></div>
      </div>
      <button className={styles.boton}>Todos los proyectos </button>
    </section>
  );
}
