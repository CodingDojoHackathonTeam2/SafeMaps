import mapboxgl from 'mapbox-gl';

import Navbar from './components/Navbar';
import LogReg from './pages/LogReg';
import MapSearch from './pages/MapSearch';

import { Routes, Route } from 'react-router-dom';

function App() {
	const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
	mapboxgl.accessToken = MAPBOX_TOKEN;

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/login' element={<LogReg />} />
				<Route path='/map' element={<MapSearch />} />
			</Routes>
		</>
	);
}

export default App;
// Merge conflict resolved by S. Yee and R. Caceres
