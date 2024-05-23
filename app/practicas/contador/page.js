"use client";
import { useState } from "react";
import styles from "./contador.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.containerContador}>
      <p className="">{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
