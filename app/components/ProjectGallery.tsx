"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  imagenes: string[];
  nombreProyecto: string;
};

export default function ProjectGallery({
  imagenes,
  nombreProyecto,
}: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [zoomAbierto, setZoomAbierto] = useState(false);

  if (!imagenes || imagenes.length === 0) {
    return (
      <p className="text-sm text-[var(--text-mid)]">
        Próximamente fotos de este proyecto.
      </p>
    );
  }

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const imagenActual = imagenes[index];

  return (
    <>
      {/* CARD PRINCIPAL CON CARRUSEL */}
      <div className="max-w-4xl bg-white/40 backdrop-blur-sm border border-[var(--border-card)] rounded-xl shadow-md p-6">
        <div className="relative w-full">
          {/* Imagen grande clickeable */}
          <button
            type="button"
            onClick={() => setZoomAbierto(true)}
            className="w-full h-72 md:h-96 rounded-xl overflow-hidden border border-[var(--border-card)] shadow-sm bg-white focus:outline-none"
          >
            <img
              src={imagenActual}
              alt={nombreProyecto}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
          >
            ◀
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
          >
            ▶
          </button>
        </div>

        {/* Puntitos */}
        <div className="flex justify-center gap-2 mt-4">
          {imagenes.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === index ? "bg-neutral-900" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL DE ZOOM CON MENOS “ZOOM” VISUAL */}
      {zoomAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setZoomAbierto(false)} // click afuera cierra
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // que no se cierre si clickeás adentro
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setZoomAbierto(false)}
              className="absolute -top-10 right-0 text-white text-sm uppercase tracking-[0.18em]"
            >
              Cerrar ✕
            </button>

            {/* Contenedor de imagen con padding y tamaño limitado */}
            <div className="w-full max-h-[80vh] rounded-xl border border-neutral-700 bg-black/90 overflow-hidden flex items-center justify-center p-4">
              <img
                src={imagenActual}
                alt={nombreProyecto}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Flechas también en el modal */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg:white/85 border border-neutral-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-white"
            >
              ▶
            </button>

            {/* Puntitos en el modal */}
            <div className="flex justify-center gap-2 mt-3">
              {imagenes.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-6 rounded-full ${
                    i === index ? "bg-white" : "bg-neutral-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
