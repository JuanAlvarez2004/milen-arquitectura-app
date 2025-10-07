export default function ProjectGrid({ isOpen, project }) {
    return (
        <div id="project" className="grid grid-flow-col grid-cols-[75px] md:grid-cols-[150px] justify-center gap-5 auto-cols-[250px] md:auto-cols-[600px] h-full" role="region" aria-label={`Proyecto: ${project.title}`}> 
            <div className="justify-items-end-safe">
                <div className="h-10 w-10 overflow-hidden border rounded-xs p-1" aria-label="Icono del proyecto">
                    <img className="object-contain w-full h-full" src={project.icon} alt={`Icono de ${project.title}`} title={`Icono de ${project.title}`} />
                </div>
                <ul className="list-none text-end" aria-label="Detalles del proyecto">
                    <li className="text-black md:text-lg font-medium"><span aria-label="Título del proyecto">{project.title}</span></li>
                    <li className="text-gray-700"><span aria-label="Ubicación del proyecto">{project.location}</span></li>
                    <li className="text-gray-700 text-sm"><span aria-label="Año del proyecto">{project.year}</span></li>
                </ul>
            </div>
            <div className="w-full" aria-label="Imagen principal del proyecto">
                <img className="object-cover w-full h-full" src={project.image} alt={`Imagen del proyecto ${project.title}`} title={`Imagen del proyecto ${project.title}`} />
            </div>
            <div className={!isOpen ? `hidden` : ''} aria-label="Descripción del proyecto">
                <span>
                    {project.description}
                </span>
            </div>
            <div className={!isOpen ? `hidden` : ''} aria-label="Imagen adicional del proyecto">
                <img className="object-cover w-full h-full" src={project.image} alt={`Imagen adicional del proyecto ${project.title}`} title={`Imagen adicional del proyecto ${project.title}`} />
            </div>
        </div>
    )
}