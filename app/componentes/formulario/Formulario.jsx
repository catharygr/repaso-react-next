import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form className={styles.containerForm}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
