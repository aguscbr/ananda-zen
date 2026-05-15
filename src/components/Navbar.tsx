import { useRef } from "react";
import { useMenu } from "../hooks/useMenu";
import { MenuIcon } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Nosotros",
    href: "#about",
  },
  {
    label: "Clases",
    href: "#classes",
  },
  {
    label: "Beneficios",
    href: "#benefits",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export const Navbar = () => {
  const menuRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const { isOpen, toggleMenu } = useMenu({ menuRef, mobileNavRef });

  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar__title}>Ananda Zen</h1>

      <nav className={styles.navbar__nav}>
        <ul className={styles.navbar__list}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className={styles.navbar__item}>
              <a href={link.href} className={styles.navbar__link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`${styles.navbar__menu} ${isOpen ? styles.navbar__menu__open : ""}`}
        onClick={toggleMenu}
        ref={menuRef}
      >
        <MenuIcon />
      </button>

      <nav
        className={`${styles.navbar__mobileNav} ${isOpen ? styles.navbar__mobileNav__open : ""}`}
        ref={mobileNavRef}
      >
        <ul className={styles.navbar__list}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className={styles.navbar__item}>
              <a
                href={link.href}
                className={styles.navbar__link}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
