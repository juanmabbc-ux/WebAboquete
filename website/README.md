# Aboquete S.A. — Website

Sitio web institucional y catálogo de productos de **Aboquete S.A.** ("Siempre Verde"), construido con Astro + Tailwind CSS y desplegado en GitHub Pages bajo el dominio `aboquete.com`.

- **Idioma:** Español (es-PA)
- **Páginas:** Inicio (`/`), Productos (`/productos`) y Vivero (`/vivero`)
- **CTA principal:** WhatsApp +507 6645-7828
- **Hosting:** GitHub Pages (estático) con dominio custom vía Squarespace
- **Última actualización del diseño:** Mayo 2026

---

## Stack

| Pieza | Tecnología |
| --- | --- |
| Framework | [Astro 4](https://astro.build/) (output estático) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) (vía plugin Vite) |
| Tipografía | Fraunces (display) + Inter (body) — Google Fonts |
| Iconografía | SVG inline (Lucide-derived) — sin emojis ni librerías externas |
| Imágenes | `astro:assets` → WebP responsivo con `srcset` |
| SEO | JSON-LD (Organization, LocalBusiness, Product, FAQPage, BreadcrumbList), sitemap, robots.txt con AI bots permitidos, `llms.txt`, `productos.md` machine-readable |
| Deploy | GitHub Actions → GitHub Pages |

---

## Estructura del repositorio

```text
aboquete-pty/                    ← Repositorio raíz
├── .github/workflows/
│   └── deploy.yml               ← CI/CD a GitHub Pages
├── website/                     ← Este sitio
│   ├── public/                  ← Activos estáticos (CNAME, robots, OG, favicon, llms.txt, productos.md)
│   ├── src/
│   │   ├── assets/
│   │   │   ├── brand/           ← Logos oficiales
│   │   │   └── products/        ← Fotos de productos
│   │   ├── components/          ← Nav, Footer, ProductCard, WhatsAppFloat, FAQ, Icon
│   │   ├── data/
│   │   │   ├── site.ts          ← NAP, social, credenciales, defaults SEO
│   │   │   └── products.ts      ← Catálogo (empacados + granel)
│   │   ├── layouts/
│   │   │   └── BaseLayout.astro ← Head con SEO + JSON-LD global
│   │   ├── pages/
│   │   │   ├── index.astro      ← Home
│   │   │   └── productos.astro  ← Catálogo + FAQ
│   │   └── styles/global.css    ← Design tokens (CSS variables) + base + componentes
│   ├── astro.config.mjs
│   └── package.json
├── resources/                   ← Fuente original (PDFs, fotos, logos)
└── context.md                   ← Contexto operativo de la empresa
```

---

## Desarrollo local

**Pre-requisito:** Node.js ≥ 22 (este proyecto usa Node 26).

```bash
cd website
npm install        # primera vez
npm run dev        # http://localhost:4321
```

### Comandos disponibles

| Comando | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR en `localhost:4321` |
| `npm run build` | Build de producción a `./dist/` |
| `npm run preview` | Servir el `dist/` localmente antes de desplegar |
| `npm run astro -- --help` | Acceso al CLI de Astro |

---

## Editar contenido del sitio

| Quieres cambiar… | Edita |
| --- | --- |
| Datos de contacto, RUC, NAP, social | `src/data/site.ts` |
| Productos (descripción, composición, presentaciones, fotos) | `src/data/products.ts` + `src/assets/products/` |
| Texto del home (hero, audiencias, credenciales) | `src/pages/index.astro` |
| Productos destacados en home | Constante `featuredSlugs` en `src/data/products.ts` |
| Preguntas frecuentes | Array `faqs` en `src/pages/productos.astro` |
| Colores y tipografía | Bloque `@theme` en `src/styles/global.css` |
| Catálogo machine-readable (para agentes IA) | `public/productos.md` + `public/llms.txt` |

> **Nota:** Cualquier cambio en `products.ts` se refleja automáticamente en el JSON-LD de la página `/productos` (schema `Product` + `ItemList`).

---

## Despliegue

### Configuración inicial (una sola vez)

- **Repositorio:** <https://github.com/juanmabbc-ux/WebAboquete> (rama `main`)
- **Workflow:** `.github/workflows/deploy.yml` corre en cada push a `main`.
- En GitHub: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.
- Sin dominio custom el sitio responde en `https://juanmabbc-ux.github.io/WebAboquete/`.

> **El repositorio debe ser público.** GitHub Pages no publica repos privados en el plan gratuito; si se vuelve privado, Pages se desactiva y el sitio se cae. Alternativas si algún día debe ser privado: GitHub Pro (US$4/mes) o mudarse a Cloudflare Pages.

### Dominio custom — `aboquete.com`

El archivo `website/public/CNAME` contiene `aboquete.com` y el dominio está declarado en **Settings → Pages → Custom domain**.

**El DNS vive en Level43 Networks** (nameservers `ns1`–`ns5.level43.net`), en un panel **Plesk**: `console.level43.net` → *Websites & Domains* → `aboquete.com` → *Hosting & DNS* → *DNS*.

Registros que apuntan el dominio a GitHub Pages (aplicados el 3 de septiembre de 2026):

| Tipo | Host | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `juanmabbc-ux.github.io` |

⚠️ **Nunca tocar en esa zona:**

- El `MX` → `SMTP.GOOGLE.COM` y los `TXT` de SPF, DKIM (`google._domainkey`) y DMARC. **El correo de la empresa es Google Workspace** y depende de ellos.
- El botón **"Reset to Default"** de Plesk: reescribe la zona completa con los valores del hosting y borra el MX de Google — tumba el correo.
- Los registros `mail`, `webmail`, `ipv4`, `staging`, `mayoristas` y `ftp`, que siguen apuntando al servidor de Level43 (`35.237.67.85`).

> **Herencia:** en ese servidor queda un WordPress + WooCommerce vacío (creado el 27 nov 2025) que fue lo que respondía en `aboquete.com` hasta el cambio. La suscripción de Level43 se mantiene porque ahí vive la zona DNS; si algún día se cancela, hay que mover el DNS antes (p. ej. a Cloudflare) copiando primero **todos** los registros de correo.

Verificación rápida:

```bash
nslookup aboquete.com 8.8.8.8   # debe devolver los 185.199.10x.153
curl -I https://aboquete.com    # debe responder "Server: GitHub.com"
```

Con el DNS resolviendo, **Settings → Pages** pasa el *DNS check* y habilita la casilla **Enforce HTTPS** (GitHub emite el certificado de Let's Encrypt 10–30 min después). Dejarla marcada.

### Despliegues posteriores

Hacer push a `main` → GitHub Actions construye y publica automáticamente. No requiere ninguna acción adicional.

---

## SEO y descubrimiento por IA

El sitio está optimizado tanto para buscadores tradicionales como para sistemas de IA (ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot).

**Aspectos clave:**

- **Meta tags** completos (`title`, `description`, OG, Twitter Card, `geo.region`) por página.
- **JSON-LD** en cada página: `Organization`, `LocalBusiness` (con dirección geo de Chanis) y, en `/productos`, `Product` schema por producto + `FAQPage` + `BreadcrumbList`.
- **Sitemap** generado automáticamente en `/sitemap-index.xml`.
- **`robots.txt`** permite explícitamente a los crawlers de IA: `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, `Bingbot`, `Applebot`.
- **`/llms.txt`** — archivo de contexto siguiendo [llmstxt.org](https://llmstxt.org) para que los LLMs entiendan rápidamente el sitio.
- **`/productos.md`** — espejo markdown del catálogo, optimizado para extracción por agentes de IA que no renderizan JavaScript.
- **Idioma declarado** como `es-PA` (Spanish-Panamá).
- **Imágenes** con `alt` descriptivo en español y dimensiones declaradas (sin CLS).

### Palabras clave objetivo

- "abono orgánico Panamá"
- "caballaza compostada"
- "tierra negra Panamá"
- "humus de lombriz Panamá"
- "sustratos orgánicos"
- "cascarilla de arroz"
- "enmienda orgánica MIDA"
- "fertilizante orgánico Panamá"

---

## Accesibilidad y rendimiento

- Contraste mínimo 4.5:1 (WCAG AA) en todo el texto.
- Áreas táctiles ≥ 44×44 px (incluye el botón flotante de WhatsApp y CTAs).
- Skip link al contenido principal.
- Focus visible en todos los elementos interactivos.
- Soporte de `prefers-reduced-motion` (animaciones reducidas).
- Imágenes optimizadas a WebP con `loading="lazy"` por defecto (excepto el hero).
- Tipografías cargadas con `display=swap` para evitar FOIT.

---

## Sistema de diseño — Paleta de marca

Extraída del logo oficial. Definida como variables CSS en `src/styles/global.css`:

| Token | Hex | Uso |
| --- | --- | --- |
| Verde Bosque (`--color-bosque-700`) | `#0F6B3F` | Color primario · headings · nav |
| Verde Campo (`--color-bosque-500`) | `#2E8B3D` | Acentos secundarios |
| Verde Lima (`--color-lima-400`) | `#6FB54A` | Highlights · badges de verificación |
| Amarillo Sol (`--color-sol-400`) | `#F5C518` | Detalles cálidos · íconos del sol |
| Naranja Siempre Verde (`--color-naranja-400`) | `#E8771A` | Botón WhatsApp · CTAs clave |
| Crema (`--color-crema`) | `#FAF7F0` | Backgrounds suaves |
| Tinta (`--color-tinta`) | `#1A1A1A` | Texto de body |

---

## Mantenimiento — Tareas recurrentes

| Frecuencia | Tarea |
| --- | --- |
| Trimestral | Actualizar `lastUpdated` en `src/data/site.ts` |
| Cada vez que cambie un producto | Editar `src/data/products.ts` y subir nueva foto a `src/assets/products/` |
| Cada vez que cambie un dato legal/oficial | Editar `src/data/site.ts` (RUC, MIDA, ITBMS, dirección, teléfono) |
| Anual | Revisar `public/llms.txt` y `public/productos.md` para que reflejen el catálogo vigente |
| Cuando se agreguen productos | Considerar agregarlos a `featuredSlugs` en `products.ts` si aplica |

---

## Contacto del cliente (referencia rápida)

- **Razón social:** Aboquete S.A.
- **RUC:** 164705-1-388664 DV80
- **WhatsApp:** +507 6645-7828
- **Email:** <info@aboquete.com>
- **Instagram:** [@aboquete](https://www.instagram.com/aboquete)
- **Dirección:** Chanis, Hipódromo Presidente Remón, Ciudad de Panamá
- **Registro MIDA:** #2253
- **Cert. ITBMS exento:** 967000028026
- **Respaldo científico:** SENACYT-CECOM, Proyecto DINE-028-2023
