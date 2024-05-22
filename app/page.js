import Formulario from "./componentes/formulario/Formulario";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Formulario />
    </main>
  );
}
