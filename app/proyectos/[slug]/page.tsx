import { notFound } from "next/navigation";
import SectionTitle from "../../components/SectionTitle";
import { getProjectBySlug, projects } from "../projects";
import ProjectGallery from "../../components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { nombre, tipo, anio, descripcion, imagenes } = project;

  return (
    <div className="py-10">
      <SectionTitle
        title={nombre}
        subtitle={`${tipo} · ${anio}`}
      />

      <p className="text-neutral-600 mb-6 max-w-2xl">{descripcion}</p>

      {/* Carrusel estilo “Nosotros” + zoom */}
      <ProjectGallery imagenes={imagenes} nombreProyecto={nombre} />
    </div>
  );
}
