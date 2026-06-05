"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProducts, formatPrice } from "@/lib/products";
import styles from "./StoreSection.module.css";

const FEATURED_COUNT = 3;

export const StoreSection = () => {
  const featured = getProducts().slice(0, FEATURED_COUNT);

  return (
    <section className={styles.store} id="tienda">
      <motion.div
        className={styles.store__container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.store__badge}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          TIENDA
        </motion.span>
        <motion.h2
          className={styles.store__title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Llevá Ananda Zen con vos
        </motion.h2>
        <motion.p
          className={styles.store__description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Accesorios, ropa y equipamiento pensados para acompañar la práctica.
        </motion.p>

        <motion.div
          className={styles.store__grid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {featured.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={`/tienda/${product.slug}`}
                className={styles.store__card}
              >
                <div className={styles.store__cardImage}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.store__img}
                  />
                  <span className={styles.store__cardCategory}>
                    {product.category}
                  </span>
                </div>
                <div className={styles.store__cardBody}>
                  <h3 className={styles.store__cardName}>{product.name}</h3>
                  <p className={styles.store__cardPrice}>
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/tienda" className={styles.store__cta}>
            Ver tienda completa →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
