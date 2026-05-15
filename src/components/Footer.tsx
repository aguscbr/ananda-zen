import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <p className={styles.footer__brand}>Ananda Zen</p>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Ananda Zen. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
