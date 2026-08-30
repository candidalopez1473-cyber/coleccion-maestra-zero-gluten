import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF8F0] px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="guarantee-heading"
    >
      {/* Círculo decorativo */}
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full opacity-[0.06] sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #D97742 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Sello / ícono de garantía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex h-20 w-20 items-center justify-center rounded-full shadow-md"
            style={{ background: "rgba(45,140,74,0.12)" }}
            aria-hidden="true"
          >
            <ShieldCheck size={36} className="text-[#2D8C4A]" />
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          id="guarantee-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px] mb-6"
        >
          Pruébalo sin riesgo
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42] sm:text-[18px] max-w-2xl mx-auto"
        >
          Si en 7 días sientes que la Colección Maestra Zero Gluten™ no es para
          ti, te devolvemos el 100% de tu dinero. Sin preguntas, sin letra
          pequeña. Solo queremos que tengas la oportunidad de comprobar que
          cocinar sin gluten sí puede ser fácil y delicioso.
        </motion.p>
      </div>
    </section>
  );
}