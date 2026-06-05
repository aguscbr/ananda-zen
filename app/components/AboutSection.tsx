"use client";

import { Heart, Sparkles, Sun } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className={styles.about} id="about">
      <motion.div
        className={styles.about__container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.about__badge}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          NOSOTROS
        </motion.span>
        <motion.h2
          className={styles.about__title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Yoga con propósito
        </motion.h2>
        <motion.p
          className={styles.about__description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ananda Zen nació del deseo de acercar el yoga a las infancias y
          adolescencias, ofreciéndoles herramientas para la vida a través del
          movimiento consciente.
        </motion.p>
        <motion.div
          className={styles.about__features}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {values.map(({ title, icon, description }, index) => (
            <motion.div
              key={title}
              className={styles.about__feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className={styles.about__featureIcon}>{icon}</div>
              <h3 className={styles.about__featureTitle}>{title}</h3>
              <p className={styles.about__featureDescription}>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
