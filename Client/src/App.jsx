import mapboxgl from 'mapbox-gl';
import { Routes, Route, Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import LogReg from './pages/LogReg';
import MapSearch from './pages/MapSearch';
import Anounncement from './pages/Anounncement';
import Team from './pages/Team';

function App() {
	const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
	mapboxgl.accessToken = MAPBOX_TOKEN;

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<LogReg />} />
				<Route path='/map' element={<MapSearch />} />
				<Route path='/anounncement' element={<Anounncement />} />
				<Route path='/team' element={<Team />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
// Merge conflict resolved by S. Yee and R. Caceres
