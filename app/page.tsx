import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./proyectos/projects";

export default function Home() {
  const destacados: Project[] = projects.slice(0, 2);

  return (
    <main className="space-y-12">
      <section className="grid md:grid-cols-[3fr,2fr] gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.22em] text-[var(--text-light)] text-xs mb-3">
            Estudio de arquitectura
          </p>

          <h1 className="text-4xl font-bold text-[var(--text-dark)] leading-tight">
            Arquitectura contemporánea, funcional y humana.
          </h1>

          <section className="border-y border-[var(--border-card)] py-4 text-xs tracking-[0.18em] uppercase flex flex-wrap gap-6 mt-4">
            <span>Viviendas familiares</span>
            <span>Reformas y ampliaciones</span>
            <span>Locales comerciales</span>
          </section>

          <p className="text-[var(--text-mid)] text-base mt-4 max-w-xl">
            Diseñamos y acompañamos obras nuevas, remodelaciones e interiorismo,
            enfocándonos en la funcionalidad, la luz natural y la vida cotidiana.
          </p>

          <div className="flex gap-3 mt-6">
            <Link
              href="/proyectos"
              className="px-6 py-2 rounded-full bg-black text-white tracking-[0.15em] text-xs"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-2 rounded-full border border-black tracking-[0.15em] text-xs hover:bg-black hover:text-white transition"
            >
              Solicitar reunión
            </Link>
          </div>
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
            <p className="text-[var(--text-mid)]">
              Escuchamos las necesidades, el modo de habitar, el presupuesto
              disponible y los tiempos del proyecto.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2 text-[var(--text-dark)]">
              2. Proyecto
            </h3>
            <p className="text-[var(--text-mid)]">
              Definimos la propuesta arquitectónica, distribución, materialidad
              y documentación necesaria para avanzar a obra.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2 text-[var(--text-dark)]">
              3. Obra y seguimiento
            </h3>
            <p className="text-[var(--text-mid)]">
              Acompañamos el proceso de construcción, resolviendo detalles y
              decisiones técnicas junto al cliente.
            </p>
          </div>
        </div>
      </section>


      <section className="space-y-6">
        <h2 className="section-title">Nosotros</h2>

        <div className="card w-full">
          <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg border border-[var(--border-card)]">
            <img
              src="/nosotros/02.jpg"
              alt="Arquitectos del estudio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-[var(--text-mid)] text-sm leading-relaxed max-w-3xl">
              Somos un estudio de arquitectura dedicado al diseño de viviendas,
              espacios comerciales y proyectos de recreación. Combinamos
              experiencia técnica con una mirada estética contemporánea, buscando
              siempre generar espacios funcionales, cálidos y pensados para ser
              vividos.
            </p>

            <Link
              href="/nosotros"
              className="px-6 py-2 rounded-full bg-black text-white tracking-[0.15em] text-xs"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-subtitle mb-4">
          Algunos de nuestros trabajos recientes.
        </p>

        <Link
          href="/proyectos"
          className="px-6 py-2 rounded-full bg-black text-white tracking-[0.15em] text-xs mb-6 inline-block"
        >
          Ver todos los proyectos
        </Link>

        <div className="grid md:grid-cols-2 gap-6">
          {destacados.map((p: Project) => (
            <ProjectCard key={p.slug} proyecto={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Servicios</h2>
        <p className="section-subtitle max-w-xl mb-6">
          Acompañamos todo el proceso, desde la idea inicial hasta la entrega de
          la obra.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Proyecto Arquitectónico</h3>
            <p className="text-[var(--text-mid)]">
              Desarrollo integral de proyectos residenciales y comerciales.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Interiorismo</h3>
            <p className="text-[var(--text-mid)]">
              Diseño de interiores, selección de materiales e iluminación.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Reformas y Ampliaciones</h3>
            <p className="text-[var(--text-mid)]">
              Actualización de espacios existentes para nuevas formas de habitar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
