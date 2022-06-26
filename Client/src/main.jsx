import MapContext from './context/MapContext';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MapContext>
			  <App />
		  </MapContext>

    </BrowserRouter>
  </React.StrictMode>
)
// Merge conflict resolved by S. Yee and R. Caceres