import { motion } from "framer-motion";
import { BadgePercent, ShieldCheck } from "lucide-react";

interface LineItem {
  label: string;
  price: string;
  isSubtotal?: boolean;
  isRegular?: boolean;
  isHighlight?: boolean;
}

const lineItems: LineItem[] = [
  {
    label: "Colección Maestra Zero Gluten™ (110 recetas)",
    price: "$39 USD",
  },
  {
    label: "Bono 1: Dulce Sin Límites (21 Tortas Esponjosas)",
    price: "$27 USD",
  },
  {
    label: "Bono 2: Placer Sin Culpa (19 Postres Cremosos)",
    price: "$19 USD",
  },
  {
    label: "Bono 3: Comidas Proteicas (17 recetas)",
    price: "$17 USD",
  },
  {
    label: "Bono 4: El Mapa de Ingredientes",
    price: "$14 USD",
  },
  {
    label: "Valor total del stack",
    price: "$116 USD",
    isSubtotal: true,
  },
  {
    label: "Precio regular",
    price: "$29,99 USD",
    isRegular: true,
  },
  {
    label: "Hoy pagas",
    price: "$6,99 USD",
    isHighlight: true,
  },
];

export default function PricingAnchor() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="pricing-heading"
    >
      {/* Círculo decorativo */}
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-72 w-72 rounded-full opacity-[0.05] sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #D97742 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Badge / sello de oferta */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 font-['Inter',sans-serif] text-[14px] font-medium text-[#D97742]"
            style={{ background: "rgba(217,119,66,0.1)" }}
          >
            <BadgePercent size={16} aria-hidden="true" />
            Oferta especial de lanzamiento
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          id="pricing-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px] mb-10"
        >
          Todo esto, hoy, por mucho menos{" "}
          <span className="whitespace-nowrap">de lo que imaginas</span>
        </motion.h2>

        {/* Desglose de valor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-[#D97742]/15 bg-[#FFF8F0] px-6 py-8 sm:px-10 sm:py-10"
        >
          {/* Lista detallada de cada elemento */}
          <div className="space-y-3">
            {lineItems.map((item, index) => {
              // Fila de subtotal (valor total del stack) — TACHADO
              if (item.isSubtotal) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border-2 border-[#D97742]/25 bg-white px-5 py-4"
                  >
                    <span className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#2D2A24]">
                      {item.label}
                    </span>
                    <span className="font-['Inter',sans-serif] text-[18px] font-bold text-[#D97742] line-through">
                      {item.price}
                    </span>
                  </div>
                );
              }

              // Fila de precio regular — TACHADO
              if (item.isRegular) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-[#D97742]/10 bg-white px-5 py-4"
                  >
                    <span className="font-['Inter',sans-serif] text-[16px] text-[#8C7A6B]">
                      {item.label}
                    </span>
                    <span className="font-['Inter',sans-serif] text-[18px] font-bold text-[#8C7A6B] line-through">
                      {item.price}
                    </span>
                  </div>
                );
              }

              // Fila destacada (hoy pagas) — SIN TACHAR, fondo verde
              if (item.isHighlight) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-[#2D8C4A] px-5 py-4 text-white shadow-md"
                  >
                    <span className="font-['Inter',sans-serif] text-[16px] font-semibold">
                      {item.label}
                    </span>
                    <span className="font-['Inter',sans-serif] text-[22px] font-bold">
                      {item.price}
                    </span>
                  </div>
                );
              }

              // Fila normal (cada elemento del stack) — SIN TACHAR
              return (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-[#D97742]/10 bg-white px-5 py-4"
                >
                  <span className="font-['Inter',sans-serif] text-[15px] text-[#5C4F42]">
                    {item.label}
                  </span>
                  <span className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#2D2A24]">
                    {item.price}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Ahorro destacado */}
          <div className="mt-5 text-center">
            <span className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#2D8C4A]">
              <BadgePercent size={14} aria-hidden="true" />
              Ahorras $109 USD (~94% de descuento)
            </span>
          </div>
        </motion.div>

        {/* Texto de ancla */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-center font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42] sm:text-[17px]"
        >
          Obtienes más de $116 USD en recetas y guías profesionales sin gluten
          por menos de lo que cuesta un café.
        </motion.p>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-2 text-[#8C7A6B]"
        >
          <ShieldCheck size={16} strokeWidth={1.5} aria-hidden="true" />
          <span className="font-['Inter',sans-serif] text-[14px]">
            Garantía de 7 días — si no te encanta, te devolvemos tu dinero
          </span>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#2D8C4A] px-12 py-5 font-['Inter',sans-serif] text-[18px] font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#23763C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D8C4A] active:scale-[0.98]"
            style={{ minHeight: 60 }}
          >
            Quiero mis recetas ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}