import '../../styles/Skills.scss';
import { dataSkills } from './dataStatic/dataSkills';
export const Skills = () => {
	return (
		<div className='Skills'>
			<h2>Tecnologías</h2>
			<ol>
				{dataSkills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ol>
		</div>
	);
};
