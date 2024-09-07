import Carousel from "./componentes/carousel/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Mis prácticas de React con Nextjs</h1>
      <Carousel />
    </main>
  );
}
