"use client";
import styles from "./formulario.module.css";
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.containerForm}
    >
      <label htmlFor="nombre">Nombre:</label>
      <input
        className={styles.input}
        type="text"
        id="nombre"
        name="nombre"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />
      <label htmlFor="email">Email:</label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        className={styles.textarea}
        id="mensaje"
        name="mensaje"
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
      ></textarea>
      <button
        className={styles.btnFormulario}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
