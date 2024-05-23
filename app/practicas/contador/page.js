"use client";
import { useState } from "react";
import styles from "./contador.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    setContador(contador - 1);
  };

  return (
    <div className={styles.containerContador}>
      <p className={styles.p}>{contador}</p>
      <button
        className={styles.btnContador}
        onClick={() => handleClick(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className={styles.btnContador}
        onClick={() => handleClick(contador - 1)}
      >
        Decrementar
      </button>
    </div>
  );
}
