import { Baby, GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ClassesSection.module.css";

const classes = [
  {
    icon: <Baby />,
    age: "3 – 5 años",
    title: "Pequeños Exploradores",
    description:
      "Yoga a través del cuento, la música y el juego. Posturas de animales y ejercicios de respiración lúdicos.",
    schedule: "Martes y Jueves 10:00",
  },
  {
    icon: <School />,
    age: "6 – 10 años",
    title: "Guerreros Zen",
    description:
      "Secuencias dinámicas, juegos cooperativos, técnicas de atención y relajación guiada para la infancia.",
    schedule: "Lunes y Miércoles 17:00",
  },
  {
    icon: <GraduationCap />,
    age: "11 – 17 años",
    title: "Adolescentes en Equilibrio",
    description:
      "Yoga para gestionar el estrés, mejorar la concentración y fortalecer la autoestima en la adolescencia.",
    schedule: "Martes y Viernes 18:30",
  },
];

export const ClassesSection = () => {
  return (
    <section className={styles.classes} id="classes">
      <motion.div
        className={styles.classes__container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.classes__badge}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          CLASES
        </motion.span>
        <motion.h2
          className={styles.classes__title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Un espacio para cada edad
        </motion.h2>
        <motion.p
          className={styles.classes__description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Programas diseñados específicamente para cada etapa del desarrollo.
        </motion.p>
        <motion.div
          className={styles.classes__cards}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {classes.map(({ icon, age, title, description, schedule }, index) => (
            <motion.div
              key={title}
              className={styles.classes__card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className={styles.classes__cardIcon}>{icon}</div>
              <span className={styles.classes__cardAge}>{age}</span>
              <h3 className={styles.classes__cardTitle}>{title}</h3>
              <p className={styles.classes__cardDescription}>{description}</p>
              <span className={styles.classes__cardSchedule}>🗓️ {schedule}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
