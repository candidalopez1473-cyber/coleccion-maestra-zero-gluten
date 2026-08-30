import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, ShieldCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "¿Necesito ingredientes raros o caros?",
    answer:
      "No. Las recetas usan harinas alternativas accesibles, y el Mapa de Ingredientes te muestra exactamente qué sustituto usar según lo que tengas disponible.",
  },
  {
    question:
      "¿Tengo tiempo para esto? Ya de por sí cocinar me toma mucho.",
    answer:
      "Las recetas están pensadas para el día a día, sin técnicas complicadas ni pasos eternos. Si sabes seguir una receta, puedes hacer esto.",
  },
  {
    question:
      "Ya fallé antes cocinando sin gluten, ¿por qué esta vez sería diferente?",
    answer:
      "Porque esta vez no estás improvisando. Cada receta fue creada y probada por la Chef Valeria Montés, con las proporciones exactas para que el resultado sea consistente.",
  },
  {
    question: "¿Cómo recibo el material?",
    answer:
      "Acceso digital inmediato después de tu compra. Puedes empezar a cocinar hoy mismo.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-[#D97742]/12 bg-white overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97742]"
        aria-expanded={isOpen}
      >
        <span className="font-['Inter',sans-serif] text-[16px] font-medium text-[#2D2A24]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#D97742]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 font-['Inter',sans-serif] text-[15px] leading-relaxed text-[#5C4F42]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAndClosing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="faq-heading"
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
        {/* ===== FAQ ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="faq-heading"
            className="text-center font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px] mb-4"
          >
            Antes de que te vayas,{" "}
            <span className="whitespace-nowrap">resolvamos tus dudas</span>
          </h2>
        </motion.div>

        {/* Acordeón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3 mt-8"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* ===== CIERRE FINAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          {/* Título de cierre */}
          <h2 className="font-['Playfair_Display',serif] text-[32px] leading-tight text-[#2D2A24] sm:text-[36px] mb-6">
            Tu mesa sin gluten, sin sacrificios,{" "}
            <span className="whitespace-nowrap">empieza hoy</span>
          </h2>

          {/* Párrafo corto */}
          <p className="font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42] sm:text-[18px] max-w-xl mx-auto mb-10">
            110 recetas, 4 bonos, una chef especializada detrás de cada una.
            Todo lo que necesitas para dejar de improvisar y empezar a
            disfrutar.
          </p>

          {/* CTA final */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#2D8C4A] px-12 py-5 font-['Inter',sans-serif] text-[18px] font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#23763C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D8C4A] active:scale-[0.98]"
            style={{ minHeight: 60 }}
          >
            Quiero mis recetas ahora
          </button>

          {/* Texto debajo del CTA */}
          <div className="mt-5 flex items-center justify-center gap-4 text-[#8C7A6B]">
            <span className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-[14px]">
              <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
              Acceso digital inmediato
            </span>
            <span className="text-[#D9C5B2]" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-[14px]">
              <ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" />
              Garantía de 7 días
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}