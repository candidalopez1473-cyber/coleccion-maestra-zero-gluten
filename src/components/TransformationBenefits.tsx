import { motion } from "framer-motion";
import { Smile, PiggyBank, Heart } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Preparas para toda la familia, no solo para ti",
  },
  {
    icon: PiggyBank,
    title:
      "Ahorras dinero frente a comprar productos sin gluten ya hechos",
  },
  {
    icon: Heart,
    title:
      "Sigues una alimentación pensada para no inflamar, sin dietas complicadas",
  },
];

export default function TransformationBenefits() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF8F0] px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="benefits-heading"
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

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            {/* Título */}
            <h2
              id="benefits-heading"
              className="mb-6 font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px]"
            >
              Vuelve a disfrutar la mesa{" "}
              <span className="whitespace-nowrap">sin culpa</span>
            </h2>

            {/* Párrafo */}
            <p className="mb-10 font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42] sm:text-[18px]">
              Imagina preparar un pan esponjoso un domingo por la mañana, o
              llevar una torta a la reunión familiar sabiendo que a nadie le va
              a faltar sabor — ni a ti la digestión ligera. Con estas recetas no
              solo comes sin gluten: comes rico, en familia, y sin sentirte "la
              diferente" en la mesa.
            </p>

            {/* 3 beneficios */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
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
                    <benefit.icon size={20} className="text-[#D97742]" />
                  </span>
                  <span className="font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#2D2A24]">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna de imagen — mesa familiar, celebración o persona disfrutando */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 mt-14 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Imagen principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#F5EDE4]">
                <img
                  src="https://fzfncffjekempswnjilr.supabase.co/storage/v1/object/public/cosmos-code-sites/_assets/WxQNhPK218P4j1RBkCxlZQo3Dxw1/0f6d6793-4e0b-40a3-b90e-27e4306a49a4/cc5a1795c933e3d4cb52769c.png"
                  alt="Familia disfrutando junta en la mesa con pan y tortas sin gluten"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}