"use client";

import { useState, FormEvent } from "react";
import SectionTitle from "../components/SectionTitle";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensaje, setMensaje] = useState("");


  const numeroEstudio = "5493854204007";

  const enviarWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const texto = encodeURIComponent(
      `Hola, soy ${nombre}.
  Mi email es: ${email}.
  Estoy interesad@ en un proyecto de tipo: ${tipo || "no especificado"}.
  Detalle del proyecto:
  ${mensaje}`
    );

    const url = `https://wa.me/${numeroEstudio}?text=${texto}`;
    window.open(url, "_blank");

    setNombre("");
    setEmail("");
    setTipo("");
    setMensaje("");
  };

  return (
    <div className="py-10 space-y-8">
      <SectionTitle
        title="Contacto"
        subtitle="Contanos brevemente tu proyecto y nos ponemos en contacto para coordinar una reunión."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-1">Arq. Sergio Rene Ovejero</h3>
          <p className="text-sm">
            📞{" "}
            <a href="tel:+5493854204007" className="underline underline-offset-2">
              +54 9 385 420 4007
            </a>
          </p>
          <p className="text-sm">
            📧{" "}
            <a
              href="mailtejemplo@gmail.com"
              className="underline underline-offset-2"
            >
              ejemplomail@gmail.com
            </a>
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-1">Arq. Rosa Perez Bicecci</h3>
          <p className="text-sm">
            📞{" "}
            <a href="tel:+5493856149300" className="underline underline-offset-2">
              +54 9 385 614 9300
            </a>
          </p>
          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:mail@socia2.com"
              className="underline underline-offset-2"
            >
              mail@socia2.com
            </a>
          </p>
        </div>
      </div>

      <section className="mt-4">
        <div className="card max-w-xl mx-auto">
          <h3 className="text-lg font-semibold text-[var(--text-dark)]">
            Enviar consulta
          </h3>
          <p className="text-sm text-[var(--text-mid)] mt-1">
            Completá el formulario y te respondemos por WhatsApp o correo.
          </p>

          <form onSubmit={enviarWhatsApp} className="mt-5 space-y-4">
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="nombre" className="font-medium">
                Nombre y apellido
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="border border-[var(--border-card)] rounded-md px-3 py-2 outline-none focus:border-black bg-[#E9E3E3]"
              />
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="email" className="font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-[var(--border-card)] rounded-md px-3 py-2 outline-none focus:border-black bg-[#E9E3E3]"
              />
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="tipo" className="font-medium">
                Tipo de proyecto
              </label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="border border-[var(--border-card)] rounded-md px-3 py-2 outline-none focus:border-black bg-[#E9E3E3]"
              >
                <option value="">Seleccionar…</option>
                <option value="vivienda">Vivienda</option>
                <option value="local comercial">Local comercial</option>
                <option value="interiorismo">Interiorismo</option>
                <option value="reforma/ampliación">Reforma / ampliación</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="mensaje" className="font-medium">
                Contanos un poco más
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="border border-[var(--border-card)] rounded-md px-3 py-2 outline-none focus:border-black resize-none bg-[#E9E3E3]"
                placeholder="Metros, ubicación, obra nueva o reforma, etc."
              />
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="rounded-full bg-black text-white px-8 py-2 text-xs uppercase tracking-[0.18em]"
              >
                Enviar consulta por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
