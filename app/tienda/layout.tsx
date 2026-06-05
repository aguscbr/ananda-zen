import Link from "next/link";
import styles from "./layout.module.css";

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.header__brand}>
          Ananda Zen
        </Link>
        <Link href="/" className={styles.header__back}>
          ← Volver al inicio
        </Link>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} Ananda Zen. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
}
