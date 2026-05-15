import { Baby, GraduationCap, School } from "lucide-react";
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
    <section className={styles.classes}>
      <div className={styles.classes__container}>
        <span className={styles.classes__badge}>CLASES</span>
        <h2 className={styles.classes__title}>Un espacio para cada edad</h2>
        <p className={styles.classes__description}>
          Programas diseñados específicamente para cada etapa del desarrollo.
        </p>
        <div className={styles.classes__cards}>
          {classes.map(({ icon, age, title, description, schedule }) => (
            <div className={styles.classes__card}>
              <div className={styles.classes__cardIcon}>{icon}</div>
              <span className={styles.classes__cardAge}>{age}</span>
              <h3 className={styles.classes__cardTitle}>{title}</h3>
              <p className={styles.classes__cardDescription}>{description}</p>
              <span className={styles.classes__cardSchedule}>🗓️ {schedule}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
