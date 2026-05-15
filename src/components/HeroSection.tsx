import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <span className={styles.hero__badge}>
            Yoga para niños y adolescentes
          </span>
          <h1 className={styles.hero__title}>
            Donde la calma{" "}
            <span className={styles.hero__titleHighlight}>se vuelve juego</span>
          </h1>
          <p className={styles.hero__description}>
            En Ananda Zen acompañamos a las infancias y adolescencias a
            descubrir el bienestar, la concentración y la alegría a través del
            yoga.
          </p>
          <div className={styles.hero__buttons}>
            <button
              className={`${styles.hero__button} ${styles["hero__button--primary"]}`}
            >
              Conocer clases
            </button>
            <button
              className={`${styles.hero__button} ${styles["hero__button--secondary"]}`}
            >
              Contactanos
            </button>
          </div>
        </div>
        <figure className={styles.hero__imageContainer}>
          <img
            className={styles.hero__image}
            src="./hero-kids-yoga.jpg"
            alt="Niños practicando yoga en Ananda Zen"
          />
        </figure>
      </div>
    </section>
  );
};
