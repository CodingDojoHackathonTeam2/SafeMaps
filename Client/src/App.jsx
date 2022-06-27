import mapboxgl from 'mapbox-gl';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer'
import LogReg from './pages/LogReg';
import MapSearch from './pages/MapSearch';

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
				
			</Routes>
      <Footer/>
		</>
	);
}

export default App;
// Merge conflict resolved by S. Yee and R. Caceres
