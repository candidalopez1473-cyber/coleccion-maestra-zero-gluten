import { CircleDot, Heart } from "lucide-react";

function scrollToPricing() {
  const target = document.getElementById("precios");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

const painPoints = [
  "Compraste harinas sin gluten carísimas... y el pan igual quedó duro como piedra",
  "Te sientes hinchada o pesada después de comer, pero no quieres renunciar al placer de la mesa",
  "En las reuniones familiares sientes que 'te pierdes' de las tortas y postres",
  "No sabes qué harina reemplaza a cuál, ni en qué proporción",
  "Sientes culpa por no poder cocinar lo mismo para toda la familia",
];

export default function ProblemIdentification() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="problem-heading"
    >
      {/* Círculo decorativo con textura de harina/miga */}
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full opacity-[0.06] sm:h-[28rem] sm:w-[28rem]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #D97742 0%, transparent 70%), repeating-conic-gradient(#D97742 0% 1%, transparent 1% 3%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Columna de texto */}
          <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
            {/* Título */}
            <h2
              id="problem-heading"
              className="mb-10 text-center lg:text-left font-['Playfair_Display',serif] text-[36px] leading-tight text-[#2D2A24] sm:mb-14"
            >
              ¿Te suena familiar?
            </h2>

            {/* Lista de puntos de dolor */}
            <ul className="mb-12 space-y-5 sm:mb-16 sm:space-y-6">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-[3px] shrink-0 text-[#D97742]" aria-hidden="true">
                    <CircleDot size={20} strokeWidth={2} />
                  </span>
                  <span className="font-['Inter',sans-serif] text-[16px] leading-relaxed text-[#5C4F42]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Cierre empático */}
            <div className="rounded-2xl border border-[#D97742]/15 bg-[#FFF8F0] px-6 py-6 sm:px-8 sm:py-7">
              <p className="mb-4 font-['Inter',sans-serif] text-[18px] italic leading-relaxed text-[#5C4F42]">
                No es que no sepas cocinar. Es que nadie te dio las proporciones
                correctas. Eso está por cambiar.
              </p>
              <div className="flex items-center gap-2">
                <Heart
                  size={16}
                  className="text-[#D97742]"
                  fill="#D97742"
                  aria-hidden="true"
                />
                <span className="font-['Inter',sans-serif] text-[14px] text-[#D97742]">
                  Estás a un paso de transformar tu cocina
                </span>
              </div>
            </div>

            {/* CTA principal */}
            <div className="mt-10 text-center lg:text-left sm:mt-12">
              <button
                type="button"
                onClick={scrollToPricing}
                className="inline-flex items-center gap-2 rounded-full bg-[#2D8C4A] px-8 py-4 font-['Inter',sans-serif] text-[16px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#23763C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D8C4A] active:scale-[0.98]"
              >
                Quiero mis recetas ahora
              </button>
            </div>
          </div>

          {/* Columna de imagen — placeholder listo para fotografía de comida */}
          <div className="flex-1 mt-14 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Imagen principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#F5EDE4]">
                <img
                  src="https://i.imgur.com/ix0pify.png"
                  alt="Torta sin gluten con crema, frambuesas y menta"
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
          </div>
        </div>
      </div>
    </section>
  );
}