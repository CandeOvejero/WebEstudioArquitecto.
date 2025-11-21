import Image from "next/image";
import Link from "next/link";
import type { Project } from "../proyectos/projects";

type ProjectCardProps = {
  proyecto: Project;
};

export default function ProjectCard({ proyecto }: ProjectCardProps) {
  const { slug, nombre, tipo, anio, descripcion, imagenes } = proyecto;

  const portada = imagenes[0]; 

  return (
    <Link href={`/proyectos/${slug}`}>
      <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="relative h-48">
          {portada ? (
            <Image
              src={portada}
              alt={nombre}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-500">
              Sin imagen
            </div>
          )}
        </div>

        <div className="p-4 text-sm">
          <h2 className="text-base font-semibold">{nombre}</h2>
          <p className="text-neutral-500 text-xs">
            {tipo} · {anio}
          </p>
          <p className="text-neutral-600 mt-2">{descripcion}</p>
        </div>
      </article>
    </Link>
  );
}
