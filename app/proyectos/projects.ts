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
    anio: 2025,
    descripcion:
"Proyecto y remodelación completa de un espacio exterior que se encontraba deteriorado por el paso de los años. La piscina original presentaba fallas estructurales y el patio necesitaba una redefinición total. A partir de este estado inicial, se llevó adelante una reconstrucción integral: se renovó la piscina, se reordenó el entorno y se proyectó un sector completamente nuevo, moderno y funcional. El resultado es un área exterior revitalizada, pensada para disfrutar y adaptarse a futuras terminaciones y usos. Ciudad de La Banda, Santiago del Estero.",
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
    anio: 2025,
    descripcion:
      "Proyecto y construccion que integra espacios modernos con el entorno natural. Los interiores combinan madera, negro e iluminación cálida, con grandes ventanales que conectan directamente con la galería, el deck y la piscina. El exterior se completa con un paisajismo que acompaña la vida al aire libre y potencia las vistas. Maco, Santiago del Estero",
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
    slug: "local-comercial",
    nombre: "Local Comercial",
    tipo: "Proyecto y construccion de local comercial",
    anio: 2025,
    descripcion:"Construcción de un nuevo local comercial diseñado con líneas simples, amplias aberturas y una planta flexible. En esta etapa pueden verse los avances de obra: estructura terminada, grandes ventanales instalados y los interiores tomando forma. La propuesta busca crear un espacio luminoso, versátil y listo para adaptarse a las necesidades del futuro negocio.",
    imagenes: [
      "/proyectos/Local/16.jpg",
      "/proyectos/Local/01.jpg",
      "/proyectos/Local/02.jpg",
      "/proyectos/Local/03.jpg",
      "/proyectos/Local/04.jpg",
      "/proyectos/Local/05.jpg",
      "/proyectos/Local/06.jpg",
      "/proyectos/Local/07.jpg",
      "/proyectos/Local/08.jpg",
      "/proyectos/Local/09.jpg",
      "/proyectos/Local/10.jpg",
      "/proyectos/Local/11.jpg",
      "/proyectos/Local/12.jpg",
      "/proyectos/Local/13.jpg",
      "/proyectos/Local/14.jpg",
      "/proyectos/Local/15.jpg",
      "/proyectos/Local/16.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
