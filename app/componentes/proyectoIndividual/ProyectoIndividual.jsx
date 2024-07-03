import { proyectos } from "@/app/utilidades/proyectos";

export default function ProyectoIndividual({
  titulo,
  descripcion,
  imagenUrl,
  url,
}) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <img
        src={imagenUrl}
        alt="Imagen de un proyecto"
      />
      <a href={url}>Ver más</a>
    </div>
  );
}
