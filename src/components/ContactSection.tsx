import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";

export const ContactSection = () => (
  <section id="contact" className={styles.contactSection}>
    <div className={styles.contactSection__container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.contactSection__header}
      >
        <span className={styles.contactSection__label}>Contacto</span>
        <h2 className={styles.contactSection__title}>¿Listo para empezar?</h2>
        <p className={styles.contactSection__description}>Escribinos y te contamos todo sobre nuestras clases.</p>
      </motion.div>

      <div className={styles.contactSection__grid}>
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.contactSection__form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.contactSection__formGroup}>
            <label className={styles.contactSection__label}>Nombre</label>
            <input
              type="text"
              className={styles.contactSection__input}
              placeholder="Tu nombre"
            />
          </div>
          <div className={styles.contactSection__formGroup}>
            <label className={styles.contactSection__label}>Email</label>
            <input
              type="email"
              className={styles.contactSection__input}
              placeholder="tu@email.com"
            />
          </div>
          <div className={styles.contactSection__formGroup}>
            <label className={styles.contactSection__label}>Mensaje</label>
            <textarea
              rows={4}
              className={styles.contactSection__textarea}
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <button className={styles.contactSection__button}>Enviar mensaje</button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.contactSection__info}
        >
          {[
            { icon: Mail, label: "Email", value: "prueba@anandazen.com" },
            { icon: Phone, label: "Teléfono", value: "+54 11 1234-5678" },
            {
              icon: MapPin,
              label: "Dirección",
              value: "Buenos Aires, Argentina",
            },
          ].map((item) => (
            <div key={item.label} className={styles.contactSection__contactItem}>
              <div className={styles.contactSection__iconWrapper}>
                <item.icon className={styles.contactSection__icon} />
              </div>
              <div>
                <p className={styles.contactSection__contactLabel}>{item.label}</p>
                <p className={styles.contactSection__contactValue}>{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
