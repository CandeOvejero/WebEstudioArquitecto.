import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "./projects";

export default function ProyectosPage() {
  return (
    <div className="py-10">
      <SectionTitle
        title="Proyectos"
        subtitle="Una selección de proyectos y trabajos recientes."
      />

      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {projects.map((proyecto) => (
          <ProjectCard key={proyecto.slug} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}
