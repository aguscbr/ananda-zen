import { Heart, Sparkles, Sun } from "lucide-react";
import styles from "./AboutSection.module.css";

const values = [
  {
    icon: <Heart />,
    title: "Amor y respeto",
    description:
      "Cada niño es único. Nuestras clases son un espacio seguro donde se celebra la diversidad.",
  },
  {
    icon: <Sparkles />,
    title: "Creatividad",
    description:
      "El yoga se vuelve cuento, juego y aventura para conectar con el cuerpo de forma lúdica.",
  },
  {
    icon: <Sun />,
    title: "Bienestar integral",
    description:
      "Trabajamos cuerpo, mente y emociones para un desarrollo armonioso y equilibrado.",
  },
];

export const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <span className={styles.about__badge}>NOSOTROS</span>
        <h2 className={styles.about__title}>Yoga con propósito</h2>
        <p className={styles.about__description}>
          Ananda Zen nació del deseo de acercar el yoga a las infancias y
          adolescencias, ofreciéndoles herramientas para la vida a través del
          movimiento consciente.
        </p>
        <div className={styles.about__features}>
          {values.map(({ title, icon, description }) => (
            <div className={styles.about__feature}>
              <div className={styles.about__featureIcon}>{icon}</div>
              <h3 className={styles.about__featureTitle}>{title}</h3>
              <p className={styles.about__featureDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
