export type Project = {
  slug: string;
  nombre: string;
  tipo: string;
  anio: number;
  descripcion: string;
  imagenes: string[];
};

export const projects: Project[] = [
  {
    slug: "obra-remodelacion-pileta",
    nombre: "Obra: remodelación de pileta",
    tipo: "Vivienda unifamiliar",
    anio: 2024,
    descripcion:
      "Remodelación de pileta y patio interior–exterior. Ciudad de La Banda, Santiago del Estero.",
    imagenes: [
      "/proyectos/remodelacionPileta/01.jpg",
      "/proyectos/remodelacionPileta/02.jpg",
      "/proyectos/remodelacionPileta/03.jpg",
      "/proyectos/remodelacionPileta/04.jpg",
      "/proyectos/remodelacionPileta/05.jpg",
      "/proyectos/remodelacionPileta/06.jpg",
      "/proyectos/remodelacionPileta/07.jpg",
    ],
  },
  {
    slug: "finca-quincho",
    nombre: "Finca y quincho de fin de semana",
    tipo: "Espacio de recreación",
    anio: 2023,
    descripcion:
      "Proyecto y construcción completa de vivienda y quincho en finca, pensados para descanso y reuniones familiares.",
    imagenes: [
      "/proyectos/fincaMaco/21.jpg",
      "/proyectos/fincaMaco/01.jpg",
      "/proyectos/fincaMaco/02.jpg",
      "/proyectos/fincaMaco/03.jpg",
      "/proyectos/fincaMaco/04.jpg",
      "/proyectos/fincaMaco/05.jpg",
      "/proyectos/fincaMaco/06.jpg",
      "/proyectos/fincaMaco/07.jpg",
      "/proyectos/fincaMaco/08.jpg",
      "/proyectos/fincaMaco/09.jpg",
      "/proyectos/fincaMaco/10.jpg",
      "/proyectos/fincaMaco/11.jpg",
      "/proyectos/fincaMaco/12.jpg",
      "/proyectos/fincaMaco/13.jpg",
      "/proyectos/fincaMaco/14.jpg",
      "/proyectos/fincaMaco/15.jpg",
      "/proyectos/fincaMaco/16.jpg",
      "/proyectos/fincaMaco/17.jpg",
      "/proyectos/fincaMaco/18.jpg",
      "/proyectos/fincaMaco/19.jpg",
      "/proyectos/fincaMaco/20.jpg",
    ],
  },
  {
    slug: "depto-minimal",
    nombre: "Departamento minimal",
    tipo: "Interiorismo",
    anio: 2023,
    descripcion:
      "Interiores luminosos, paleta neutra y mobiliario funcional, pensados para una vida cotidiana simple y ordenada.",
    imagenes: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
