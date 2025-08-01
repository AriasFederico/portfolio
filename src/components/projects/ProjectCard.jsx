import '../../styles/ProjectCard.scss';

export const ProjectCard = ({ image, title, description, tags, href }) => {
	return (
		<a
			className='ProjectCard'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			<img src={image} alt={`Proyecto ${title}`} />{' '}
			<div className='ProjectCard-flex'>
				<div className='ProjectCard-title-arrow'>
					<h3>{title}</h3>
					<ion-icon name='arrow-forward-outline'></ion-icon>
				</div>
				<p>{description}</p>
				<div className='ProjectCard-tags'>
					{tags.map((tag) => (
						<span key={tag} className='tag'>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};
