import mapboxgl from 'mapbox-gl';

import Navbar from './components/Navbar';
import MapSearch from './pages/MapSearch';
import LogReg from './pages/LogReg';
import { Routes, Route } from "react-router-dom";


function App() {
	const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
	mapboxgl.accessToken = MAPBOX_TOKEN;

	return (
		<>

			<Navbar />
			<MapSearch />
			<Routes>
				<Route path="/login" element={<LogReg />} />
			</Routes>

		</>
	);
}

export default App;
