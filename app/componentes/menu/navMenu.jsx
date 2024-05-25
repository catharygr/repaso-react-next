"use client";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.css";
import { useId, useState, useEffect } from "react";
import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import { menu_link } from "@/app/utilidades/data";
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuLink()}
          />
          <motion.div
            className={styles.navMenuContent}
            animate={{ x: "-100%" }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            exit={{ x: "0%" }}
          >
            <div className={styles.menuEnlace}>
              <ul onMouseLeave={() => setMenuHamburguer(null)}>
                {menu_link.map((slug, text, href) => (
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
                <li></li>
              </ul>{" "}
            </div>
            <button
              onClick={setMenuHamburguer}
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
