import styles from "./CardProyectoSmall.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CardProyectoSmall({ contenido }) {
  const { titulo, descripcion, url } = contenido;

  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.5,
        }}
        exit={{ x: "0%" }}
        className={styles.cardSmall}
      >
        <Link
          href={url}
          className={styles.container}
        >
          <div className={styles.cardContainer}>
            <h2 className={styles.h2}>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
