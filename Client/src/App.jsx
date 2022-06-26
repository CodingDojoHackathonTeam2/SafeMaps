import Navbar from './components/Navbar';
import LogReg from './pages/LogReg';
import { Routes, Route } from "react-router-dom";


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/login" element={<LogReg />} />
			</Routes>
		</>
	);
}

export default App;
