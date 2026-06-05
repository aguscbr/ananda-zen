import productsData from "@/data/products.json";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  whatsappText: string;
};

export const WHATSAPP_NUMBER = "5491137861222";

export function getProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
