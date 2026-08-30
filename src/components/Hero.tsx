import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

/** Pequeño círculo decorativo con textura de harina/miga de pan */
function FlourCircle({
  size,
  top,
  left,
  right,
  bottom,
  opacity = 0.12,
  delay = 0,
}: {
  size: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  opacity?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background:
          "radial-gradient(circle at 30% 30%, rgba(217,119,66,0.25) 0%, rgba(217,119,66,0.05) 50%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}

/** Variante del botón CTA con estado hover animado */
function CTAButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      className="relative inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg rounded-[12px] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D8C4A]"
      style={{ background: "#2D8C4A", minHeight: 56 }}
    >
      {/* Efecto de brillo sutil al hover */}
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-[12px]"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
      <span className="relative z-10">Quiero mis recetas ahora</span>
      <motion.span
        className="relative z-10"
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={20} />
      </motion.span>
    </motion.button>
  );
}

function Hero() {
  const handleCTA = () => {
    const target = document.getElementById("precios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#FFF8F0" }}
    >
      {/* Círculos decorativos con textura de harina */}
      <FlourCircle size={320} top={-60} right={-80} opacity={0.1} delay={0.2} />
      <FlourCircle size={180} bottom={40} left={-40} opacity={0.08} delay={0.5} />
      <FlourCircle size={120} top="30%" right="10%" opacity={0.06} delay={0.8} />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Columna de texto */}
          <div className="flex-1 text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-['Playfair_Display',serif] text-[#2D2A24] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              Pan, tortas y postres sin gluten que sí quedan ricos{" "}
              <span className="whitespace-nowrap">(sin ser chef)</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-['Inter',sans-serif] text-[#5C4F42] leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
            >
              110 recetas anti-inflamatorias probadas por una chef profesional, con
              las proporciones exactas de harinas alternativas para que nunca más te
              queden secos, duros o sin sabor.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mb-6"
            >
              <CTAButton onClick={handleCTA} />
            </motion.div>

            {/* Texto de garantía */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 text-[#8C7A6B] font-['Inter',sans-serif]"
              style={{ fontSize: 14 }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} strokeWidth={1.5} />
                Acceso digital inmediato
              </span>
              <span className="text-[#D9C5B2]" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} strokeWidth={1.5} />
                Garantía de 7 días
              </span>
            </motion.div>
          </div>

          {/* Columna de imagen — placeholder listo para fotografía de comida */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 mt-12 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Marco decorativo con borde suave */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#F5EDE4]">
                {/* Imagen principal — reemplazar src con fotografía real */}
                <img
                  src="https://i.imgur.com/dWb3v9P.png"
                  alt="Pan sin gluten recién horneado, dorado y esponjoso"
                  className="w-full h-full object-cover"
                />
                {/* Overlay sutil para mantener calidez */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(217,119,66,0.08) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Miniaturas secundarias — fotos adicionales de comida */}
              <div className="flex gap-3 mt-4 justify-center lg:justify-start">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-sm bg-[#F5EDE4]">
                  <img
                    src="https://i.imgur.com/3M0V9yp.png"
                    alt="Torta sin gluten con frutas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-sm bg-[#F5EDE4]">
                  <img
                    src="https://i.imgur.com/FBs0rlZ.png"
                    alt="Postre sin gluten con crema"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-sm bg-[#F5EDE4]">
                  <img
                    src="https://i.imgur.com/DQIYLaS.png"
                    alt="Galletas sin gluten crocantes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;