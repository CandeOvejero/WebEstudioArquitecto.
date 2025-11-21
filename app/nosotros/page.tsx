"use client";

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

type Slide = {
  src: string;
};

const slides: Slide[] = [
  { src: "/Nosotros/01.jpg" },
  { src: "/Nosotros/socia.jpg" },
  { src: "/Nosotros/02.jpg" },
  { src: "/Nosotros/03.jpg" },
  { src: "/Nosotros/04.jpg" },
  { src: "/Nosotros/05.jpg" },
];

export default function NosotrosPage() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="py-10 space-y-16">

      <SectionTitle
        title="Nosotros"
        subtitle="Somos dos arquitectos que combinan la mirada técnica con el diseño centrado en las personas."
      />

      <div className="max-w-4xl mx-auto card bg-white/40 backdrop-blur-sm border border-[var(--border-card)] rounded-xl shadow-md p-6">

        <div className="relative w-full">
          <div className="h-72 md:h-96 rounded-xl overflow-hidden border border-[var(--border-card)] shadow-sm bg-white">
            <img
              src={slides[index].src}
              className="w-full h-full object-cover"
            />
          </div>


          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
          >
            ◀
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === index ? "bg-neutral-900" : "bg-neutral-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <section className="space-y-10 max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.22em] text-[var(--text-light)]">
          El equipo
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <article className="p-6 bg-white/40 backdrop-blur-sm border border-[var(--border-card)] rounded-xl shadow-sm">
            <div className="w-full h-48 overflow-hidden rounded-lg border border-[var(--border-card)] mb-4">
              <img
                src="/nosotros/01.jpg"
                alt="Sergio"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold">Arq. Sergio Rene Ovejero</h3>

            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-light)] mb-3">
              Dirección de obra · Proyecto arquitectónico
            </p>

            <p className="text-[var(--text-mid)] text-sm leading-relaxed">
              Arquitecto especializado en obra, dirección y ejecución de proyectos.
              Su enfoque integra técnica, claridad y funcionalidad, asegurando que
              cada obra avance con precisión.
            </p>
          </article>

          <article className="p-6 bg-white/40 backdrop-blur-sm border border-[var(--border-card)] rounded-xl shadow-sm">
            <div className="w-full h-48 overflow-hidden rounded-lg border border-[var(--border-card)] mb-4">
              <img
                src="/nosotros/socia.jpg"
                alt="Rosa"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold">Arq. Rosa Perez Bicecci</h3>

            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-light)] mb-3">
              Interiorismo · Materialidad · Diseño
            </p>

            <p className="text-[var(--text-mid)] text-sm leading-relaxed">
              Arquitecta orientada al interiorismo, diseño de espacios y selección
              de materiales. Aporta sensibilidad estética y calidez a cada ambiente.
            </p>
          </article>

        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-[0.22em] text-[var(--text-light)]">
          Cómo trabajamos
        </h2>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="card">
            <h3 className="font-semibold mb-2 text-[var(--text-dark)]">
              1. Reunión inicial
            </h3>
            <p className="text-[var(--text-mid)]">Escuchamos necesidades, modos de habitar y tiempos.</p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2 text-[var(--text-dark)]">
              2. Proyecto
            </h3>
            <p className="text-[var(--text-mid)]">
              Definimos propuesta, distribución, materialidad y documentación.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2 text-[var(--text-dark)]">
              3. Obra y seguimiento
            </h3>
            <p className="text-[var(--text-mid)]">
              Acompañamos la obra, resolviendo detalles junto al cliente.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
