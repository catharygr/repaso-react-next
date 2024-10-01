import styles from "./CardProyectoSmall.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CardProyectoSmall({ contenido }) {
  const { titulo, descripcion, url } = contenido;

  return (
    <Link
      href={url}
      className={styles.container}
    >
      <motion.div
        key={contenido.url}
        className={styles.cardSmall}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div className={styles.cardContainer}>
          <h2 className={styles.h2}>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </motion.div>
    </Link>
  );
}
