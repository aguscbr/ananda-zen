import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__logo"]}>Ananda Zen</h1>

      {/* Desktop */}
      <nav className={styles["header__nav"]}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Clases</a>
          </li>
          <li>
            <a href="#">Beneficios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={styles["header__mobile-btn"]}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles["header__mobile-nav"]}
          >
            <ul></ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Clases</a>
            </li>
            <li>
              <a href="#">Beneficios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
