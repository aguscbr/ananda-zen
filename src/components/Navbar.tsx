import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clases", href: "#clases" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__logo"]}>Ananda Zen</h1>

      {/* Desktop */}
      <nav className={styles["header__nav"]}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li id={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
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
            <ul>
              {navLinks.map(({ href, label }) => (
                <li id={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
