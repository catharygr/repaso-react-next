import Link from "next/link";
import Image from "next/image";
import ChicaDos from "../../../public/imagen/chica-2.svg";
import styles from "./OtrosProyectos.module.css";

export function OtrosProyectos() {
  return (
    <div className={styles.containerExterior}>
      <aside className={styles.container}>
        <div>
          <h2>Sarajevo Tour</h2>
          <p>
            Sarajevo Tour es una aplicación web que te permite conocer los
            lugares más emblemáticos de Sarajevo.
          </p>
          <Link href="https://sarajevo-turismo.netlify.app">Ver proyecto</Link>
        </div>
        <Image
          src={ChicaDos}
          alt="imagen"
          width={300}
          height={300}
        />
        <div>
          <h2>E-commerce: Mi Tienda</h2>
          <p>
            E-commerce es una aplicación web online que permite hacer compras
            sin tener que visitar una tienda física.
          </p>
          <Link href="https://opencells-ecommerce-lit-caty.netlify.app">
            Ver proyecto
          </Link>
        </div>
      </aside>
    </div>
  );
}
