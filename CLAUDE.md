@AGENTS.md

# Ananda Zen — Contexto del proyecto

## Qué es este proyecto

Landing page de una sola página para **Ananda Zen**, una escuela de yoga para niños y adolescentes ubicada en Buenos Aires, Argentina. El contenido y la UI están en español (castellano rioplatense: "vos", "escribinos", etc.).

## Stack tecnológico

- **Next.js 16.2.7** (App Router) — leer `node_modules/next/dist/docs/` antes de escribir código
- **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — sin config file, usa `@import "tailwindcss"` en CSS
- **Framer Motion 12** — animaciones de entrada con `motion.*` y `whileInView`
- **Lucide React 1.17** — iconos
- **CSS Modules** — toda la estilización de componentes

## Estructura de archivos

```
app/
  layout.tsx          — layout raíz (metadata pendiente de actualizar)
  page.tsx            — página principal, ensambla todos los componentes
  globals.css         — variables CSS globales + fuentes
  components/
    index.ts          — barrel export de todos los componentes
    Navbar.tsx / .module.css
    HeroSection.tsx / .module.css
    AboutSection.tsx / .module.css
    ClassesSection.tsx / .module.css
    BenefitsSection.tsx / .module.css
    ContactSection.tsx / .module.css
    Footer.tsx / .module.css
  hooks/
    useMenu.tsx       — manejo del menú móvil (open/close + click outside)
```

## Sistema de diseño

### Paleta de colores (CSS variables en `globals.css`)

Toda la paleta usa HSL con variables CSS. Los colores clave del proyecto:

| Variable | Valor HSL | Uso |
|---|---|---|
| `--zen-deep` | `153 35% 45%` | Verde oscuro — primario, iconos, énfasis |
| `--zen-light` | `153 33% 92%` | Verde muy claro — fondos suaves |
| `--zen-warm` | `40 60% 94%` | Cálido crema — gradiente del hero |
| `--primary` | `153 33% 76%` | Verde medio — anillos, badges |
| `--card` | `153 30% 97%` | Fondo de tarjetas |
| `--border` | `153 20% 90%` | Bordes suaves |
| `--foreground` | `160 20% 18%` | Texto principal oscuro |
| `--muted-foreground` | `160 10% 45%` | Texto secundario |
| `--radius` | `1rem` | Radio base de bordes |

Uso en CSS: siempre `hsl(var(--nombre))` o `hsl(var(--nombre) / 0.5)` para opacidad.

### Tipografía

Dos fuentes de Google Fonts (importadas en `globals.css`):

- `--font-display`: **Nunito** — títulos (`h1`, `h2`, `h3`, marca)
- `--font-body`: **Quicksand** — párrafos, labels, navegación, formularios

> `layout.tsx` todavía carga Geist (residuo del scaffold de Next.js) — no se usa realmente en los componentes.

### Escala tipográfica típica

| Elemento | Tamaño | Fuente | Peso |
|---|---|---|---|
| Hero `h1` | `3.75rem` → `2rem` mobile | display | 800 |
| Section `h2` | `3rem` → `1.75rem` mobile | display | 800 |
| Card `h3` | `1.5rem` | display | 700 |
| Badge/label | `0.875rem`, uppercase, `letter-spacing: 0.1em` | body | 600 |
| Descripción | `1.125rem` | body | 400 |

## Convenciones de código

### Nombrado CSS (BEM en CSS Modules)

Patrón estricto: `.bloque__elemento` y `.bloque__elemento--modificador`

```css
.hero {}               /* bloque */
.hero__container {}    /* elemento */
.hero__button {}       /* elemento */
.hero__button--primary {}   /* modificador */
.hero__button--secondary {} /* modificador */
```

### Componentes React

- Todos los componentes usan `"use client"` (animaciones con Framer Motion lo requieren)
- Exportados como named exports (`export const Navbar = () => ...`)
- Re-exportados desde `app/components/index.ts` (barrel)
- Datos estáticos (listas de valores, clases, beneficios) declarados como constantes fuera del componente

### Animaciones con Framer Motion

Patrón consistente en todas las secciones:
- **Hero**: `initial → animate` (carga inmediata)
- **Otras secciones**: `initial → whileInView` con `viewport={{ once: true }}`
- Delay escalonado para listas: `delay: 0.5 + index * 0.1`
- Duración estándar: `0.6s`
- Movimiento típico: `opacity: 0, y: 20` → `opacity: 1, y: 0`

### Responsive

Breakpoints usados (mobile-first en algunos lugares, desktop-first en otros):

| Breakpoint | Ancho |
|---|---|
| Tablet | `768px` |
| Desktop pequeño | `1024px` |
| Mobile pequeño | `480px` |

Colapso estándar de grids: `repeat(3, 1fr)` → `1fr` en mobile.

## Secciones de la página

| Sección | ID | Descripción |
|---|---|---|
| Navbar | — | Sticky, menú hamburguesa en mobile |
| Hero | `#home` | Título + imagen, gradiente zen-light → zen-warm |
| About | `#about` | 3 tarjetas de valores (Amor, Creatividad, Bienestar) |
| Classes | `#classes` | 3 tarjetas de clases por edad (3-5, 6-10, 11-17 años) |
| Benefits | `#benefits` | Grid de 6 beneficios del yoga infantil |
| Contact | `#contact` | Formulario + datos de contacto en 2 columnas |
| Footer | — | Marca + copyright |

## Tienda virtual

La tienda es estática: los productos se cargan desde `data/products.json`. No hay backend ni base de datos.

### Arquitectura

| Archivo | Rol |
|---|---|
| `data/products.json` | Fuente de verdad — agregar/editar/quitar productos aquí |
| `lib/products.ts` | Tipos (`Product`), helpers (`getProducts`, `getProductBySlug`, `formatPrice`, `buildWhatsAppUrl`), constante `WHATSAPP_NUMBER` |
| `app/tienda/layout.tsx` | Header propio con link de vuelta al landing + footer mínimo |
| `app/tienda/page.tsx` | Catálogo completo — Server Component |
| `app/tienda/[slug]/page.tsx` | Detalle de producto — Server Component con `generateStaticParams` |
| `app/components/StoreSection.tsx` | Teaser en la landing page (primeros 3 productos) |

### Datos de cada producto (campos requeridos en products.json)

```ts
{
  slug: string         // URL-friendly, único
  name: string
  category: string
  price: number        // en ARS
  description: string
  details: string[]    // lista de specs (talle, material, etc.)
  image: string        // ruta desde /public, ej: /products/remera.jpg
  whatsappText: string // mensaje pre-cargado para el botón de WhatsApp
}
```

### Cómo agregar un producto

1. Agregar entrada en `data/products.json` con todos los campos
2. Colocar la imagen en `public/products/[nombre].jpg`
3. El build regenera las páginas estáticas automáticamente (`generateStaticParams`)

### WhatsApp

- Número configurado en `lib/products.ts` → constante `WHATSAPP_NUMBER` (formato: `5491112345678`)
- URL generada con `buildWhatsAppUrl(phone, text)` → `https://wa.me/[phone]?text=[encoded]`
- Cada producto tiene su propio `whatsappText` en el JSON

### Imágenes de productos

Las imágenes deben ir en `/public/products/`. Si una imagen no existe, el contenedor muestra el fondo `--zen-light` (verde claro) como placeholder.

## Notas importantes

- **`ClassesSection.module.css` tiene reglas duplicadas** — los bloques de CSS aparecen dos veces (bug, hay que limpiar)
- **`BenefitsSection.module.css` usa hex hardcodeado** (`#4a9c6d`, `#1a1a1a`, `#666`) en lugar de variables CSS — inconsistencia con el resto
- El formulario de contacto solo hace `e.preventDefault()` — no tiene lógica de envío implementada
- `layout.tsx` tiene metadata genérica de Create Next App — pendiente actualizar título y descripción del sitio
- La imagen del hero (`./hero-kids-yoga.jpg`) se referencia con ruta relativa — debería estar en `/public`
