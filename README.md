# Colección Maestra Zero Gluten

## Descripción

Crea una página de ventas para un producto digital de bajo ticket llamado "Colección Maestra Zero Gluten™ por Chef Valeria Montés". Estilo cálido, cercano y confiable, como si una chef amiga te hablara directamente. Público: mujeres 30-55 años, hispanohablantes, con celiaquía/sensibilidad al gluten o madres cocinando para hijos con restricciones. Diseño limpio, apetitoso, con espacio para fotograf

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · PWA

## Estructura

- `/src/App.tsx` — punto de entrada
- `/src/components/Hero.tsx` — Sección principal con headline, subheadline, CTA y texto de garantía.
- `/src/components/ProblemIdentification.tsx` — Lista de puntos de dolor en formato bullets/tarjetas cortas con cierre empático.
- `/src/components/SolutionMechanism.tsx` — Método de la Chef Valeria con 3 pilares y foto.
- `/src/components/DeliverablesStack.tsx` — Stack de 5 entregables (recetario + 4 bonos) con tarjetas.
- `/src/components/TransformationBenefits.tsx` — Beneficios de transformación con imagen de mesa familiar.
- `/src/components/PricingAnchor.tsx` — Precio con desglose de valor, ancla y CTA.
- `/src/components/Guarantee.tsx` — Sección de garantía de 7 días con sello e ícono.
- `/src/components/FaqAndClosing.tsx` — Acordeón de objeciones frecuentes y cierre final con CTA.

## Instalación

```bash
npm install
npm run dev    # desarrollo (Vite)
npm run build  # build de producción → dist/
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

- `VITE_SUPABASE_URL` — URL de tu proyecto Supabase (Settings → API).
- `VITE_SUPABASE_ANON_KEY` — anon/publishable key del mismo proyecto.

Las variables `VITE_*` son públicas en el navegador: **nunca** pongas la `service_role` ni otros secretos aquí.

## Deploy en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com) (framework: Vite).
2. Build command `npm run build`, output `dist/`.
3. Carga las variables `VITE_*` de `.env.example` en Settings → Environment Variables.
4. En Supabase → Auth → URL Configuration agrega el dominio de Vercel a los redirects si tu app usa login.

## Integración continua

El workflow `.github/workflows/cosmos-build.yml` valida el build en cada push y, si falta `package-lock.json`, lo genera y propone un PR con el lockfile.

## Navegación

SPA con React Router y fallback de navegación para publicación.

---

_Generado con Cosmos Code_
Actualización 
