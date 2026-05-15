import { Brain, Leaf, Shield, Smile, Users, Wind } from "lucide-react";
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
    <section className={styles.benefitsSection}>
      <span className={styles.benefitsSection__label}>BENEFICIOS</span>
      <h2 className={styles.benefitsSection__title}>
        ¿Por qué yoga para niños?
      </h2>

      <div className={styles.benefitsSection__grid}>
        {benefits.map(({ icon, title, text }) => (
          <div key={title} className={styles.benefitsSection__card}>
            <div>
              <div className={styles.benefitsSection__icon}>{icon}</div>
            </div>
            <div>
              <h3 className={styles.benefitsSection__cardTitle}>{title}</h3>
              <p className={styles.benefitsSection__cardText}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
