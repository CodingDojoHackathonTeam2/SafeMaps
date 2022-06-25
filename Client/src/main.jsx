import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MapContext from './context/MapContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MapContext>
			<App />
		</MapContext>
	</React.StrictMode>
);
