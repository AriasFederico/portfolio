import { ContactIcons } from './ContactIcons';
import { Skills } from './Skills';
import '../../styles/ProfileHeader.scss';
import { Name } from './Name';
export const ProfileHeader = () => {
	return (
		<div className='ProfileHeader'>
			<div className='ProfileHeader-title-info'>
				<Name />
				<ContactIcons />
			</div>
			<Skills />
		</div>
	);
};
