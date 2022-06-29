import React, { useState } from 'react';
import axios from 'axios';
import * as Tabs from '@radix-ui/react-tabs';
import { useNavigate } from "react-router-dom";

const Anounncement = () => {
	let navigate = useNavigate();
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');
	const [address, setAddress] = useState('');
	const [people_capacity, setPeople_capacity] = useState('');
	const [lodging_time, setLodging_time] = useState(1);

	// languages
	const [ukranian_speaker, setUkranian_speaker] = useState(false);
	const [russian_speaker, setRussian_speaker] = useState(false);
	const [english_speaker, setEnglish_speaker] = useState(false);

	// extras
	const [pets, setPets] = useState(false);
	const [legal_assistance, setLegal_assistance] = useState(false);
	const [kid_friendly, setKid_friendly] = useState(false);
	const [transportation, setTransportation] = useState(false);
	const [childcare_support, setChildcare_support] = useState(false);
	const [first_aid, setFirst_aid] = useState(false);

	const Anounncements = (e) => {
		e.preventDefault();

		console.log({
			name: name,
			country: country,
			address: address,
			people_capacity: people_capacity,
			lodging_time: lodging_time,
			russian_speaker: russian_speaker,
			ukranian_speaker: russian_speaker,
			english_speaker: russian_speaker,
			pets: pets,
			legal_assistance: legal_assistance,
			kid_friendly: kid_friendly,
			transportation: transportation,
			childcare_support: childcare_support,
			first_aid: first_aid,
		});
		axios
			.post('http://localhost:8000/api/announcements/create', {
				name: name,
				country: country,
				address: address,
				people_capacity: people_capacity,
				lodging_time: lodging_time,
				// russian_speaker: language,
				// ukranian_speaker: language,
				// english_speaker: language,
				// coordinates: coordinates,
				pets: pets,
				legal_assistance: legal_assistance,
				kid_friendly: kid_friendly,
				transportation: transportation,
				childcare_support: childcare_support,
				first_aid: first_aid,
			}, {withCredentials: true})
			.then((res) => {
				console.log(res, 'res');
				console.log(res.data, 'is res data!');
				navigate('/map');
			})

			.catch((err) => {
				console.log(err);
				setErrors(err.response.data.errors);
			});
	};

	return (
		<>
			<div className='h-[85vh]'>
				<form
					onSubmit={Anounncements}
					className='max-w-md border-2 rounded p-4 my-4 bg-slate-200 mx-8 md:mx-auto'
				>
					<h3 className='text-center font-bold text-lg'>Host a Ukranian 💛</h3>
					<section className='flex flex-col'>
						<label htmlFor='name' id='name'>
							Volunteer Name
						</label>
						<input
							type='text'
							id='name'
							className='px-2 py-1 gap-y-3 rounded outline-none bg-white focus:ring-2 ring-blue-500'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor=''>Country</label>
						<input
							type='text'
							id='country'
							className='px-2 py-1 gap-y-4 rounded outline-none bg-white focus:ring-2 ring-blue-500'
							onChange={(e) => setCountry(e.target.value)}
						/>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							id='address'
							className='px-2 py-1  rounded outline-none bg-white focus:ring-2 ring-blue-500'
							onChange={(e) => setAddress(e.target.value)}
						/>
						<label htmlFor='people_capacity'>People Capacity</label>
						<input
							type='number'
							min='0'
							id='people_capacity'
							className='px-2  py-1 rounded  bg-white focus:ring-2 ring-blue-500'
							onChange={(e) => setPeople_capacity(e.target.value)}
						/>
						<label htmlFor=''>Lodging time (days)</label>
						<input
							type='number'
							id='lodging_time'
							className='px-2 py-1  rounded outline-none bg-white focus:ring-2 ring-blue-500'
							onChange={(e) => setLodging_time(e.target.value)}
						/>
					</section>
					<div className='flex-initial gap-y-3 bg-slate-200'>
						<section>
							<h3 className='text-center font-semibold'>Languages</h3>
							<div className='flex justify-between items-center'>
								<label htmlFor='ukranian_speaker'>🗣️ Ukranian Speaker</label>
								<input
									type='checkbox'
									id='ukranian_speaker'
									checked={ukranian_speaker}
									onChange={(e) => setUkranian_speaker((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='russian_speaker'>🗣️ Russian Speaker</label>
								<input
									type='checkbox'
									id='russian_speaker'
									checked={russian_speaker}
									onChange={(e) => setRussian_speaker((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='english_speaker'>🗣️ English Speaker</label>
								<input
									type='checkbox'
									id='english_speaker'
									checked={english_speaker}
									onChange={(e) => setEnglish_speaker((prev) => !prev)}
								/>
							</div>
						</section>
						<section>
							<h3 className='text-center font-semibold'>Services</h3>
							<div className='flex justify-between items-center'>
								<label htmlFor='pets'>🐶 Are pets allowed?</label>
								<input
									type='checkbox'
									id='pets'
									checked={pets}
									onChange={(e) => setPets((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='legal_assistance'>
									👨‍⚖️ could you help with legal assistance?
								</label>
								<input
									type='checkbox'
									id='legal_assistance'
									checked={legal_assistance}
									onChange={(e) => setLegal_assistance((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='kid_friendly'>🧒 Is it kid friendly?</label>
								<input
									type='checkbox'
									id='kid_friendly'
									checked={kid_friendly}
									onChange={(e) => setKid_friendly((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='transportation'>
									🚗 Would you help with transportation?
								</label>
								<input
									type='checkbox'
									id='transportation'
									checked={transportation}
									onChange={(e) => setTransportation((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='childcare_support'>
									🧒 Would you be willing to provide childcare support?{' '}
								</label>
								<input
									type='checkbox'
									id='childcare_support'
									checked={childcare_support}
									onChange={(e) => setChildcare_support((prev) => !prev)}
								/>
							</div>
							<div className='flex justify-between items-center'>
								<label htmlFor='first_aid'>🩺 Could you provide first aid?</label>
								<input
									type='checkbox'
									id='first_aid'
									checked={first_aid}
									onChange={(e) => setFirst_aid((prev) => !prev)}
								/>
							</div>
						</section>
						<button
							type='submit'
							className='bg-blue-500 rounded p-2 my-4 text-white w-full'
						>

							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Anounncement;
