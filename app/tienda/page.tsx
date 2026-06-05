import Link from "next/link";
import { getProducts, formatPrice } from "@/lib/products";
import styles from "./page.module.css";

export const metadata = {
  title: "Tienda | Ananda Zen",
  description:
    "Productos de yoga para chicos y adolescentes. Ropa, accesorios y equipamiento de Ananda Zen.",
};

export default function TiendaPage() {
  const products = getProducts();

  return (
    <div className={styles.tienda}>
      <div className={styles.tienda__header}>
        <span className={styles.tienda__label}>TIENDA</span>
        <h1 className={styles.tienda__title}>Nuestros productos</h1>
        <p className={styles.tienda__description}>
          Accesorios, ropa y equipamiento pensados para acompañar la práctica de
          yoga en cada etapa.
        </p>
      </div>

      <div className={styles.tienda__grid}>
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/tienda/${product.slug}`}
            className={styles.tienda__card}
          >
            <div className={styles.tienda__cardImage}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.tienda__img}
              />
              <span className={styles.tienda__cardCategory}>
                {product.category}
              </span>
            </div>
            <div className={styles.tienda__cardBody}>
              <h2 className={styles.tienda__cardName}>{product.name}</h2>
              <p className={styles.tienda__cardPrice}>
                {formatPrice(product.price)}
              </p>
              <span className={styles.tienda__cardCta}>Ver detalle →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
