import { createContext, useContext, useReducer } from 'react';

import { Popup, Marker } from 'mapbox-gl';

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

	const marketServices = {
		petFriendly: {
			true:
				"<li class='text-white bg-green-500 rounded px-1 whitespace-nowrap'>🐈Pets Allowed</li>",
			false:
				"<li class='text-white bg-red-500 rounded px-1 whitespace-nowrap'>🐈Pets Not Allowed</li>",
		},
		kidFriendly: {
			true:
				"<li class='text-white bg-green-500 rounded px-1 whitespace-nowrap'>🤱🏼Kid Friendly</li>",
			false:
				"<li class='text-white bg-red-500 rounded px-1 whitespace-nowrap'>🤱🏼Not Kid Friendly</li>",
		},
		stay: {
			long:
				"<li class='text-white bg-slate-500 rounded px-1 whitespace-nowrap'>⌛Long term stay (1 week +)</li>",
			short:
				"<li class='text-white bg-slate-500 rounded px-1 whitespace-nowrap'>⌛Short term stay (1-7 days)</li>",
		},
	};

	const setMap = (map, markersData) => {
		markersData.map(
			({
				services,
				type,
				coords,
				address,
				apartment_number,
				people_capacity,
				volunteer_name,
			}) => {
				const popup = new Popup({ offset: 25 }).setHTML(`
			<section class='my-2 text-slate-600 text-base'>
				<h1 class=''>❤️ Volunteer: <span class='font-bold'>${volunteer_name}</span></h1>
				<p class=''>🏘️ ${type} at <span class='font-bold'>${address}</span>${
					type == 'building' ? `, Apartment number ${apartment_number}` : ''
				}</p>
			</section>
			<p class='my-2 text-slate-600 text-base'>👨‍👩‍👧‍👦 People Capacity: <span class='font-bold'>${people_capacity}</span></p>
			<ul class='flex flex-wrap gap-2 text-sm'>
				${
					services.petFriendly
						? marketServices.petFriendly.true
						: marketServices.petFriendly.false
				}
				${
					services.kidFriendly
						? marketServices.kidFriendly.true
						: marketServices.kidFriendly.false
				}
				${
					services.stay == 'long'
						? marketServices.stay.long
						: marketServices.stay.short
				}
			</ul>
			`);
				new Marker({
					color: "#f55742",
					draggable: false
					}).setLngLat(coords).setPopup(popup).addTo(map);
			}
		);

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
