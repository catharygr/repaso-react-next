import Image from "next/image";
import Link from "next/link";

export function CardProyecto() {
  return (
    <div>
      <Image />
      <div>
        <h2>Nombre del Proyecto</h2>
        <p>Descripción del Proyecto</p>
        <Link></Link>
      </div>
    </div>
  );
}
