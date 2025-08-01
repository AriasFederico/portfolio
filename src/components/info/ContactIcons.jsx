import '../../styles/ContactIcons.scss';
export const ContactIcons = () => {
	return (
		<div className='ContactIcons'>
			<a href='https://github.com/AriasFederico' target='_BLANK' title='Github'>
				<ion-icon name='logo-github'></ion-icon>
			</a>
			<a
				href='https://www.linkedin.com/in/federico-arias-ab7096269/'
				title='LinkedIn'
				target='_BLANK'
			>
				<ion-icon name='logo-linkedin'></ion-icon>
			</a>
			<a
				href='https://www.instagram.com/arias.fede99/'
				target='_BLANK'
				title='Instagram'
			>
				<ion-icon name='logo-instagram'></ion-icon>
			</a>
			<a href='mailto:fede.nh.arias@gmail.com' target='_BLANK' title='Gmail'>
				<ion-icon name='at-outline'></ion-icon>
			</a>
		</div>
	);
};
