import Image from "next/image";
import PlantaUno from "../../../public/imagen/planta-1.svg";
import styles from "./Profesionalidad.module.css";

export function Profesionalidad() {
  return (
    <div className={styles.containerExterior}>
      <div className={styles.container}>
        <h1>Profesionalidad:</h1>
        <p>
          La profesionalidad es un valor que se adquiere con el tiempo y la
          experiencia. Es la capacidad de desempeñar un trabajo de forma
          correcta y eficiente, cumpliendo con las expectativas y necesidades
          del cliente.
        </p>
      </div>
      <div>
        <Image
          src={PlantaUno}
          alt="Planta Uno"
        />
      </div>
      ;
    </div>
  );
}
