"use client";
import { useState } from "react";
import styles from "./ProyectosSeleccionados.module.css";
import CardProyecto from "../card";
import CardProyectoSmall from "../card/CardProyectoSmall";
import { motion } from "framer-motion";

export default function ProyectosSeleccionados({ contenido }) {
  const [isAllProyectos, setIsAllProyectos] = useState(false);

  const handleClick = () => {
    setIsAllProyectos(!isAllProyectos);
  };
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={styles.cardsContainer}
      >
        {isAllProyectos &&
          contenido.slice(3, 6).map((proyecto) => (
            <CardProyectoSmall
              key={proyecto.id}
              contenido={proyecto}
            />
          ))}
      </motion.div>
      <button
        onClick={handleClick}
        className={styles.boton}
      >
        {isAllProyectos ? "Ver menos proyectos" : "Todos los proyectos"}
      </button>
    </section>
  );
}
