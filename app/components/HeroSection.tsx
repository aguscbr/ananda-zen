"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.hero__container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.hero__content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className={styles.hero__badge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Yoga para niños y adolescentes
          </motion.span>
          <motion.h1
            className={styles.hero__title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Donde la calma{" "}
            <span className={styles.hero__titleHighlight}>se vuelve juego</span>
          </motion.h1>
          <motion.p
            className={styles.hero__description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            En Ananda Zen acompañamos a las infancias y adolescencias a
            descubrir el bienestar, la concentración y la alegría a través del
            yoga.
          </motion.p>
          <motion.div
            className={styles.hero__buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
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
          </motion.div>
        </motion.div>
        <motion.figure
          className={styles.hero__imageContainer}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            className={styles.hero__image}
            src="./hero-kids-yoga.jpg"
            alt="Niños practicando yoga en Ananda Zen"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};
