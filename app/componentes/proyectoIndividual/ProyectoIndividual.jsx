import { proyectos } from "@/app/utilidades/proyectos";

export default function ProyectoIndividual({ esMostradoContenido }) {
  return (
    <div>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id}>
          <h2>{proyecto.titulo}</h2>
          esMostradoContenido && (<p>{proyecto.descripcion}</p>
          <a href={proyecto.url}>Ver proyecto</a>
          <img
            src={proyecto.imageUrl}
            alt="Imagen de proyecto"
          />
          )
        </div>
      ))}
    </div>
  );
}
