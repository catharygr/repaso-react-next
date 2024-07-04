"use client";
import styles from "./Carousel.module.css";
import Image from "next/image";
// import girafa from "../../assets/imagen/girafa.svg";
import { ChevronsUp } from "react-feather";
import { useState } from "react";
import { carouselData } from "../../utilidades/tarjetas";
import Link from "next/link";

export default function Carousel() {
  const [tarjetaActual, setTarjetaActual] = useState(2);

  const filtrado = carouselData.filter((card) => card.id === tarjetaActual);
  const { id, titulo, subTitulo, descripcion, url, imageUrl } = filtrado[0];
  console.log(imageUrl);

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
        alt="Imagen de una girafa"
      />
      <p>Cualquier pregunta aquí</p>
      <div className={styles.contenidoIconos}>
        <ul className={styles.contenidoUl}>
          <li
            onClick={() => setTarjetaActual(1)}
            className={styles.contenidoLi}
          >
            <ChevronsUp size={30} />
            <p>Portafolio</p>
          </li>
          <li className={styles.contenidoLi}>
            <ChevronsUp size={30} />
            <p>E-commerse</p>
          </li>
          <li className={styles.contenidoLi}>
            <ChevronsUp size={30} />
            <p>Formulario</p>
          </li>
          <li className={styles.contenidoLi}>
            <ChevronsUp size={30} />
            <p>Tour Sarajevo</p>
          </li>
          <li className={styles.contenidoLi}>
            <ChevronsUp size={30} />
            <p>BlancoDent</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
