import './App.scss';
import { ProfileHeader } from './components/info/ProfileHeader';
import { InfoHeader } from './components/projects/InfoHeader';

function App() {
	return (
		<div className='App'>
			<ProfileHeader />
			<InfoHeader />
		</div>
	);
}

export default App;
