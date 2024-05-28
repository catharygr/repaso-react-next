"use client";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.css";
import { useId, useState, useEffect } from "react";
import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import { hamburguer_link } from "@/app/utilidades/data";
import Link from "next/link";
import { X as Cerrar } from "react-feather";

export default function NavMenu({ setMenuLink }) {
  const [menuHamburguer, setMenuHamburguer] = useState(null);
  const pathname = usePathname;
  const id = useId();

  useEffect(() => {
    const elementoEnfocadoAntesDeAbrirlo = document.activeElement;
    return () => {
      elementoEnfocadoAntesDeAbrirlo?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setMenuLink();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setMenuLink]);

  return (
    <ReactFocusLock>
      <RemoveScroll>
        <div className={styles.navContainer}>
          <motion.div
            className={styles.navMenu}
            onClick={setMenuLink}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={styles.navMenuContent}
            animate={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.5,
            }}
            exit={{ x: "0%" }}
          >
            <div className={styles.menuEnlace}>
              <ul onMouseLeave={() => setMenuHamburguer(null)}>
                {hamburguer_link.map(({ slug, text, href }) => (
                  <li key={slug}>
                    {menuHamburguer === slug && (
                      <motion.div
                        layoutId={id}
                        className={styles.menuHamburguer}
                        initial={false}
                        animate={{ borderRadius: 7 }}
                      />
                    )}
                    <Link
                      onMouseEnter={() => setMenuHamburguer(slug)}
                      className={
                        pathname === href ? styles.hamburguerActive : ""
                      }
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <button
              onClick={setMenuLink}
              className={styles.cerrarBtn}
            >
              <Cerrar
                aria-hidden="true"
                focusable="false"
                className={styles.cerrarIcon}
              />
              Cerrar menú
            </button>
          </motion.div>
        </div>
      </RemoveScroll>
    </ReactFocusLock>
  );
}
