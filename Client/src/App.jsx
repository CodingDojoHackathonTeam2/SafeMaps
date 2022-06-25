import mapboxgl from 'mapbox-gl';

import Navbar from './components/Navbar';
import MapSearch from './pages/MapSearch';

function App() {
	const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
	mapboxgl.accessToken = MAPBOX_TOKEN;

	return (
		<>
			<MapSearch />
		</>
	);
}

export default App;
