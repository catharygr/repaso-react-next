"use client";
import { useState } from "react";
import styles from "./contador.module.css";

export default function Contador() {
  const handleIncrementar = () => {
    setContador(contador + 1);
  };

  const handleDecrementar = () => {
    if (contador === 0) return;
    setContador(contador - 1);
  };

  return (
    <div className={styles.containerContador}>
      <p className={styles.p}>{contador}</p>
      <button
        className={styles.btnContador}
        onClick={() => handleIncrementar(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className={styles.btnContador}
        onClick={() => handleDecrementar(contador - 1)}
      >
        Decrementar
      </button>
    </div>
  );
}
