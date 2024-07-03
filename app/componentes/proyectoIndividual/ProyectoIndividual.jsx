export default function ProyectoIndividual({
  titulo,
  descripcion,
  imagen,
  link,
}) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <img
        src={imagen}
        alt="Imagen de un proyecto"
      />
      <a href={link}>Ver más</a>
    </div>
  );
}
