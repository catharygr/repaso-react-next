"use client";
import styles from "./Carousel.module.css";
import Image from "next/image";
import { ChevronsUp } from "react-feather";
import { useState } from "react";
import { carouselData } from "../../utilidades/tarjetas";
import Link from "next/link";

export default function Carousel() {
  const [tarjetaActual, setTarjetaActual] = useState(1);

  const filtrado = carouselData.filter((card) => card.id === tarjetaActual);
  const { id, titulo, subTitulo, descripcion, url, imageUrl } = filtrado[0];

  return (
    <section className={styles.containerCarousel}>
      <div className={styles.contenidoSuperiorColor}></div>
      <div className={styles.contenidoSuperior}>
        <h2>{titulo}</h2>
        <h3>{subTitulo}</h3>
        <p>{descripcion}</p>
        <Link href="#">Más información</Link>
      </div>
      <div className={styles.contenidoBotonesControl}>
        <button>Más</button>•<button>Más</button>
      </div>
      <Image
        className={styles.imgCarousel}
        src={imageUrl}
        width={200}
        height={200}
        alt="Imagen de una jirafa"
      />
      <p className={styles.p}>Cualquier pregunta aquí</p>
      <div className={styles.contenidoIconos}>
        <CarouselItem
          tarjetaActual={tarjetaActual}
          data={carouselData}
          setTarjetaActual={setTarjetaActual}
        />
      </div>
    </section>
  );
}

function CarouselItem({ tarjetaActual, data, setTarjetaActual }) {
  return (
    <ul className={styles.contenidoUl}>
      {data.map((item) => (
        <li
          key={item.id}
          className={styles.contenidoLi}
          onClick={() => setTarjetaActual(item.id)}
        >
          <ChevronsUp size={30} />
          <p>{item.titulo}</p>
        </li>
      ))}
    </ul>
  );
}
