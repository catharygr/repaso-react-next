import styles from "./Caroucel.module.css";

export default function Caroucel() {
  return (
    <section className={styles.containerCaroucel}>
      <div className={styles.containerColor}>
        <div className={styles.contenido}>
          <h2>Todos los conocimientos</h2>
          <h3>Herramientas</h3>
          <p>
            ¡Hola! Iniciada en el mundo de la programación como junior, con
            muchas ganas de llevar a cabo todo lo aprendido en diferentes
            bootcamps, como en las plataformas interactivas: Qualentum, Josh W
            Comeau's, Practical Accessibility con Sara Soueidan, Platzi,
            Scrimba, FreeCodeCamp.
          </p>
        </div>
      </div>
    </section>
  );
}
