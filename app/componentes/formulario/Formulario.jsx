import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form className={styles.containerForm}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        className={styles.input}
        type="text"
        id="nombre"
        name="nombre"
      />
      <label htmlFor="email">Email:</label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        className={styles.textarea}
        id="mensaje"
        name="mensaje"
      ></textarea>
      <button
        className={styles.btnFormulario}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
