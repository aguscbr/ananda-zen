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
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar__title}>Ananda Zen</h1>

      <nav className={styles.navbar__nav}>
        <ul className={styles.navbar__list}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className={styles.navbar__item}>
              <a href={link.href} className={styles.navbar__link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
