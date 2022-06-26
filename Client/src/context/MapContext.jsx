import { createContext, useContext, useReducer } from 'react';

import { Map, Marker } from 'mapbox-gl';

const MapContext = createContext();

const MapReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MAP':
			return { ...state, isMapReady: true, map: action.payload };
		default:
			return state;
	}
};

const INITIAL_STATE = {
	isMapReady: false,
	map: undefined,
};

const Context = ({ children }) => {
	const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);

	const setMap = (map, markersData) => {
		markersData.map((place) => {
			console.log('🌶️', place.coords);
			new Marker().setLngLat(place.coords).addTo(map);
		});

		dispatch({
			type: 'SET_MAP',
			payload: map,
		});
	};

	return (
		<MapContext.Provider
			value={{
				state,
				// methods
				setMap,
			}}
		>
			{children}
		</MapContext.Provider>
	);
};

export default Context;

export const useMap = () => {
	return useContext(MapContext);
};
