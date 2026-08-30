import { motion } from "framer-motion";
import { Package, Gift } from "lucide-react";

function scrollToPricing() {
  const target = document.getElementById("precios");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

interface Deliverable {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isBonus?: boolean;
}

const deliverables: Deliverable[] = [
  {
    title:
      "Colección Maestra Zero Gluten™ — 110 Recetas Anti-inflamatorias de pan, tortas y postres",
    description:
      "El recetario principal con todo lo que necesitas para empezar hoy mismo.",
    imageUrl: "https://i.imgur.com/plIm8Rr.jpeg",
    imageAlt:
      "Portada del recetario Colección Maestra Zero Gluten con foto de pan sin gluten",
  },
  {
    title: "Bono 1: Dulce Sin Límites — 21 Tortas Esponjosas",
    description:
      "Porque las tortas sin gluten sí pueden quedar esponjosas y deliciosas.",
    imageUrl: "https://i.imgur.com/UjKxhNw.jpeg",
    imageAlt: "Portada del bono Dulce Sin Límites con torta esponjosa",
    isBonus: true,
  },
  {
    title: "Bono 2: Placer Sin Culpa — 19 Postres Cremosos",
    description:
      "Para que nunca más te pierdas del postre en una reunión.",
    imageUrl: "https://i.imgur.com/zY1mkd8.jpeg",
    imageAlt: "Portada del bono Placer Sin Culpa con postre cremoso",
    isBonus: true,
  },
  {
    title:
      "Bono 3: 17 Desayunos, Almuerzos y Cenas Proteicos — Comidas Proteicas Sin Gluten",
    description:
      "Alimentación completa sin gluten, no solo repostería.",
    imageUrl: "https://i.imgur.com/3UHijQU.jpeg",
    imageAlt: "Portada del bono de comidas proteicas sin gluten",
    isBonus: true,
  },
  {
    title:
      "Bono 4: El Mapa de Ingredientes — Guía de Sustitutos Sin Gluten",
    description:
      "La guía que te dice exactamente qué harina reemplaza a cuál.",
    imageUrl: "https://i.imgur.com/3pmeEX7.jpeg",
    imageAlt: "Portada del Mapa de Ingredientes con tabla de sustitutos",
    isBonus: true,
  },
];

export default function DeliverablesStack() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="deliverables-heading"
    >
      {/* Círculo decorativo */}
      <div
        className="pointer-events-none absolute -right-24 bottom-1/3 h-80 w-80 rounded-full opacity-[0.05] sm:h-[28rem] sm:w-[28rem]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #D97742 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-['Inter',sans-serif] text-[13px] font-medium text-[#D97742] sm:text-[14px]"
              style={{ background: "rgba(217,119,66,0.1)" }}
            >
              <Package size={14} aria-hidden="true" />
              Esto es lo que recibes
            </span>
          </motion.div>

          <motion.h2
            id="deliverables-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px]"
          >
            Todo lo que incluye tu{" "}
            <span className="whitespace-nowrap">Colección Maestra</span>
          </motion.h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-lg ${
                index === 0
                  ? "border-[#D97742]/30 sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "border-[#D97742]/12"
              }`}
            >
              {/* Imagen de portada / mockup */}
              <div
                className={`relative overflow-hidden rounded-t-2xl bg-[#F5EDE4] ${
                  index === 0 ? "aspect-[4/3]" : "aspect-[3/2]"
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay cálido */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(217,119,66,0.06) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Insignia "Bono" para los items secundarios */}
                {item.isBonus && (
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-['Inter',sans-serif] text-[12px] font-medium text-[#D97742] shadow-sm"
                    style={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    <Gift size={12} aria-hidden="true" />
                    Bono
                  </span>
                )}

                {/* Insignia "Principal" para el primer item */}
                {index === 0 && (
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-['Inter',sans-serif] text-[12px] font-medium text-white shadow-sm"
                    style={{ background: "#D97742" }}
                  >
                    <Package size={12} aria-hidden="true" />
                    Principal
                  </span>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  className={`font-['Inter',sans-serif] leading-snug text-[#2D2A24] ${
                    index === 0
                      ? "text-[18px] font-semibold sm:text-[20px]"
                      : "text-[16px] font-semibold"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 font-['Inter',sans-serif] text-[14px] leading-relaxed text-[#8C7A6B] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA intermedio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center sm:mt-18"
        >
          <button
            type="button"
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2 rounded-full bg-[#2D8C4A] px-10 py-4 font-['Inter',sans-serif] text-[16px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#23763C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D8C4A] active:scale-[0.98]"
            style={{ minHeight: 56 }}
          >
            Quiero mis recetas ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}