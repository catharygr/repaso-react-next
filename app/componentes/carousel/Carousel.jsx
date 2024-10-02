"use client";
import styles from "./Carousel.module.css";
import Image from "next/image";
import { ChevronsUp, ArrowLeft, ArrowRight, Circle } from "react-feather";
import { useState } from "react";
import { carouselData } from "../../utilidades/tarjetas";
import Link from "next/link";

export default function Carousel() {
  const [tarjetaActual, setTarjetaActual] = useState(1);

  const filtrado = carouselData.filter((card) => card.id === tarjetaActual);
  const { titulo, subTitulo, descripcion, imageUrl } = filtrado[0];

  const handlePrimerBtn = () => {
    tarjetaActual === 1
      ? setTarjetaActual(carouselData.length)
      : setTarjetaActual(tarjetaActual - 1);
  };

  const handleSegundoBtn = () => {
    tarjetaActual === carouselData.length
      ? setTarjetaActual(1)
      : setTarjetaActual(tarjetaActual + 1);
  };

  return (
    <section className={styles.containerCarousel}>
      <div className={styles.contenidoSuperiorColor}></div>
      <div className={styles.contenidoSuperior}>
        <h2>{titulo}</h2>
        <h3>{subTitulo}</h3>
        <p>{descripcion}</p>
        <Link
          href="/paginas-proyectos/portafolio"
          rel="noopener noreferrer"
        >
          Más información
        </Link>
      </div>
      <div className={styles.contenidoBotonesControl}>
        <ArrowLeft
          color="black"
          onClick={handlePrimerBtn}
        />
        <div className={styles.circleIcon}>
          <Circle
            size={18}
            color="#888"
          />
        </div>

        <ArrowRight
          color="black"
          onClick={handleSegundoBtn}
        />
      </div>
      <Image
        className={styles.imgCarousel}
        src={imageUrl}
        width={200}
        height={200}
        alt="Imagenes ilustrativas"
        priority
      />
      <Link
        href="#"
        className={styles.link}
      >
        Contactar
      </Link>
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

function CarouselItem({ data, setTarjetaActual }) {
  return (
    <ul className={styles.contenidoUl}>
      {data.map((item) => (
        <li
          key={item.id}
          onClick={() => setTarjetaActual(item.id)}
        >
          <ChevronsUp
            size={30}
            color="red"
          />
          <p>{item.titulo}</p>
        </li>
      ))}
    </ul>
  );
}
