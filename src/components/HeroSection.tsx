import heroImage from "../assets/hero-kids-yoga.jpg";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles["hero"]}>
      <div>
        <div>
          <span className={styles["hero__tag"]}>
            Yoga para niños y adolescentes
          </span>
          <h1 className={styles["hero__title"]}>
            Donde la calma{" "}
            <span className={styles["hero__title-highlight"]}>
              se vuelve juego
            </span>
          </h1>
          <p className={styles["hero__description"]}>
            En Ananda Zen acompañamos a las infancias y adolescencias a
            descubrir el bienestar, la concentración y la alegría a través del
            yoga.
          </p>
        </div>
        <div className={styles["hero__actions"]}>
          <button className={`${styles["hero__btn"]} ${styles["hero__btn--primary"]}`}>
            Conocer clases
          </button>
          <button className={`${styles["hero__btn"]} ${styles["hero__btn--outline"]}`}>Contactanos</button>
        </div>
      </div>
      <div className={styles["hero__image-container"]}>
        <img src={heroImage} alt="Niños practicando yoga" />
      </div>
    </section>
  );
};
