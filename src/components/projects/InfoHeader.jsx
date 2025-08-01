import { ProjectCard } from './ProjectCard';
import '../../styles/InfoHeader.scss';
import { projects } from './dataStatic.js/dataProjects';
export const InfoHeader = () => {
	return (
		<div className='InfoHeader'>
			<div className='InfoHeader-aboutme'>
				<p>
					Desarrollador Frontend autodidacta con 4 años explorando el mundo web.
					Pasé del modelado 3D a construir aplicaciones cuando descubrí cómo el
					código puede automatizar tareas y presentar datos de forma creativa.
					Tengo experiencia con React, APIs RESTful y Sass, y disfruto
					transformar información compleja en interfaces intuitivas y
					accesibles.
				</p>
				<p>
					Actualmente, desarrollo proyectos independientes donde practico el
					consumo de APIs para crear experiencias centradas en el usuario. Mi
					objetivo: colaborar en un equipo donde pueda aportar mis habilidades
					mientras sigo profundizando en el desarrollo frontend y el trabajo con
					datos
				</p>
			</div>

			<div className='InfoHeader-projects'>
				{projects.map(({ id, image, title, description, tags, href }) => (
					// se que project recibe estos props asique lo desestructure y los aplique al componente con los siguientes props
					<ProjectCard
						key={id}
						image={image}
						title={title}
						description={description}
						tags={tags}
						href={href}
					/>
				))}
			</div>
		</div>
	);
};

//
