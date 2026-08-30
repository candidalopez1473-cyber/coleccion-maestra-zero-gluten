import { motion } from "framer-motion";
import { ChefHat, Scale, Beaker, BookOpen } from "lucide-react";

const mechanismPoints = [
  {
    icon: Scale,
    title: "Proporciones exactas",
    description:
      "Cada receta indica exactamente qué harina usar y en qué cantidad",
  },
  {
    icon: ChefHat,
    title: "Validado por una chef profesional",
    description: "No son experimentos, son recetas probadas",
  },
  {
    icon: BookOpen,
    title: "Sin curva de aprendizaje",
    description:
      "El Mapa de Ingredientes te dice qué sustituye a qué",
  },
];

export default function SolutionMechanism() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF8F0] px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="solution-heading"
    >
      {/* Círculo decorativo */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-[0.05] sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #D97742 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Columna de imagen — foto de la chef o pan/torta recién horneado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 mb-14 lg:mb-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Imagen principal — foto de Chef Valeria Montés */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square bg-[#F5EDE4]">
                <img
                  src="https://i.imgur.com/V4FUYii.jpeg"
                  alt="Chef Valeria Montés"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(217,119,66,0.08) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Insignia decorativa superpuesta */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full px-5 py-3 shadow-md border border-[#D97742]/20 hidden sm:flex items-center gap-2">
                <Beaker size={18} className="text-[#D97742]" aria-hidden="true" />
                <span className="font-['Inter',sans-serif] text-[14px] font-medium text-[#5C4F42] whitespace-nowrap">
                  Método probado
                </span>
              </div>
            </div>
          </motion.div>

          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            {/* Título */}
            <h2
              id="solution-heading"
              className="mb-6 font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px]"
            >
              El método que sí funciona:{" "}
              <span className="whitespace-nowrap">Colección Maestra Zero Gluten™</span>
            </h2>

            {/* Párrafo introductorio */}
            <p className="mb-10 font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42] sm:text-[18px]">
              Creado por la Chef Valeria Montés, especializada en cocina sin gluten
              y anti-inflamatoria, este método usa combinaciones específicas de
              harinas alternativas que replican la textura esponjosa y cremosa del
              trigo. No necesitas equipos especiales ni técnicas avanzadas de
              repostería — solo seguir las proporciones exactas que ya fueron
              probadas por ti.
            </p>

            {/* 3 puntos clave del mecanismo */}
            <div className="space-y-5">
              {mechanismPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm border border-[#D97742]/10"
                >
                  <span
                    className="mt-[2px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(217,119,66,0.12)" }}
                    aria-hidden="true"
                  >
                    <point.icon size={20} className="text-[#D97742]" />
                  </span>
                  <div>
                    <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#2D2A24]">
                      {point.title}
                    </h3>
                    <p className="mt-1 font-['Inter',sans-serif] text-[15px] leading-relaxed text-[#5C4F42]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}