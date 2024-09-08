import { Link } from "react-feather";
import Image from "next/image";
import ChicaDos from "../../public/imagen/chica-2.svg";

export function OtrosProyectos() {
  return (
    <aside>
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
  );
}
