import Link from "next/link";
import Image from "next/image";
import ChicaDos from "../../../public/imagen/chica-2.svg";
import styles from "./OtrosProyectos.module.css";

export function OtrosProyectos() {
  return (
    <div className={styles.containerExterior}>
      <aside className={styles.container}>
        <div>
          <h2>Proyectos</h2>
          <p>Descripción</p>
          <Link href="#">Ver proyecto</Link>
        </div>
        <Image
          src={ChicaDos}
          alt="imagen"
          width={300}
          height={300}
        />
        <div>
          <h2>Proyectos</h2>
          <p>Descripción</p>
          <Link href="#">Ver proyecto</Link>
        </div>
      </aside>
    </div>
  );
}
