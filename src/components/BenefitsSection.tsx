import { Brain, Leaf, Shield, Smile, Users, Wind } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./BenefitsSection.module.css";

const benefits = [
  {
    icon: <Brain />,
    title: "Concentración",
    text: "Mejora la atención y el enfoque en tareas cotidianas.",
  },
  {
    icon: <Smile />,
    title: "Autoestima",
    text: "Fortalece la confianza y la imagen positiva de sí mismos.",
  },
  {
    icon: <Wind />,
    title: "Respiración",
    text: "Herramientas de calma que pueden usar en cualquier momento.",
  },
  {
    icon: <Users />,
    title: "Socialización",
    text: "Clases grupales que fomentan la empatía y el trabajo en equipo.",
  },
  {
    icon: <Shield />,
    title: "Resiliencia",
    text: "Capacidad de gestionar emociones y situaciones difíciles.",
  },
  {
    icon: <Leaf />,
    title: "Flexibilidad",
    text: "Desarrollo motriz y corporal de forma segura y divertida.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection} id="benefits">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.benefitsSection__label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          BENEFICIOS
        </motion.span>
        <motion.h2
          className={styles.benefitsSection__title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Por qué yoga para niños?
        </motion.h2>
      </motion.div>

      <motion.div
        className={styles.benefitsSection__grid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {benefits.map(({ icon, title, text }, index) => (
          <motion.div
            key={title}
            className={styles.benefitsSection__card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <div>
              <div className={styles.benefitsSection__icon}>{icon}</div>
            </div>
            <div>
              <h3 className={styles.benefitsSection__cardTitle}>{title}</h3>
              <p className={styles.benefitsSection__cardText}>{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
