import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import MapContext from './context/MapContext';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MapContext>
			  <App />
		  </MapContext>
    </BrowserRouter>
  </React.StrictMode>
)
