import { useState, useRef, useEffect, useContext } from 'react';
import { Map, Marker } from 'mapbox-gl';
import { useMap } from '../context/MapContext';

const Mapview = () => {
	// Fake API response
	const DB = {
		message: 'successful',
		res: [
			{
				volunteer_name: 'Rene',
				address: 'Las Lobelias 2209, La Florida, Santiago',
				services: ['food', 'host', 'bath'],
				coords: [-70.586622, -33.512547],
				type: 'house',
			},
			{
				volunteer_name: 'Damian',
				apartment_number: '22',
				address: 'Carlos Antunes 2229, Providencia, Santiago',
				services: ['food', 'bath'],
				coords: [-70.60685, -33.427849],
				type: 'building',
			},
		],
	};

	const mapDiv = useRef(null);
	const { setMap } = useMap();
	// const { setMap } = useContext(MapContext);

	useEffect(() => {
		const map = new Map({
			container: mapDiv.current, // container ID
			style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
			center: [-70.652817, -33.50118], // starting position [lng, lat]
			zoom: 11, // starting zoom
		});

		// set map recibes the map when its created and the places where markes should go, ill document this better tomorrow night - René
		setMap(map, DB.res);
	}, []);

	return (
		<div ref={mapDiv} className='w-full h-screen bg-zinc-900 top-0 left-0'></div>
	);
};

export default Mapview;
