"use client";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.css";
import { useId, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

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
          ></motion.div>
        </div>
      </RemoveScroll>
    </ReactFocusLock>
  );
}
