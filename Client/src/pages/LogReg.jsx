import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LogReg = () => {
	let navigate = useNavigate();
	//saving CSRFToken in state
	const [CSRFTok, setCSRFTok] = useState('');
	//
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		address: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const register = (e) => {
		e.preventDefault();

		console.log(user);

		axios.post('http://localhost:8000/api/users/logout').then((res) => {
			axios
				.post('http://localhost:8000/api/users/register', user, { withCredentials: true })
				.then((res) => {
					console.log(res.data);
					setUser({
						firstname: '',
						lastname: '',
						email: '',
						address: '',
						password: '',
						confirmPassword: '',
					});
					navigate('/anounncement');
				})
				.catch((err) => {
					console.log(err);
					setErrors(err.response.data.errors);
				})
		});
	};

	const login = (event) => {
		event.preventDefault();

		//S. Yee:
		const getCSRFa = () => {
			axios
				.get('http://localhost:8000/api/csrf/', {})
				.then((res) => {
					console.log('whole response', res);
					console.log(res.data.CSRFToken);
					setCSRFTok(res.data.CSRFToken);
					return res.data.CSRFToken;
				})
				.catch((err) => {
					console.log(err.response.data);
				});
		};
		if (CSRFTok === '') {
			getCSRFa();
		}
		console.log(CSRFTok);

		axios.post('http://localhost:8000/api/users/logout').then((res)=>{

		// Need to send get request to get CSRF token
		// And then add to header with the key `X-CSRFToken`
		axios
			.post(
				'http://localhost:8000/api/users/login',
				{
					email: email,
					password: password,
				},
				{
					headers: { 'X-CSRFToken': CSRFTok },
					withCredentials: true,
				}
			)
			.then((res) => {
				console.log(res, 'res');
				console.log(res.data, 'is res data!');
				navigate('/anounncement');
			})
			.catch((err) => {
				console.log(err.response.data);
			})} );
	};

	return (
		<section className='min-h-[85vh]'>
			<div className='max-w-lg mx-auto border-2 rounded my-4 bg-slate-200'>
				<Tabs.Root defaultValue='login' orientation='vertical'>
					<Tabs.List
						aria-label='tabs example'
						className='flex justify-center divide-x-2 divide-slate-400'
					>
						<Tabs.Trigger className='flex-auto p-2' value='login'>
							Login
						</Tabs.Trigger>
						<Tabs.Trigger className='flex-auto p-2' value='register'>
							Register
						</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content value='login'>
						<form onSubmit={login} className='flex flex-col p-4'>
							<label for='email'>Email</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='text'
								name='email'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label for='email'>Password</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='password'
								name='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type='submit'
								className='bg-blue-500 rounded p-2 my-4 text-white'
							>
								Sign In
							</button>
						</form>
					</Tabs.Content>

					<Tabs.Content value='register'>
						<form onSubmit={register} className='flex flex-col p-4'>
							<label for='firstname'>First Name</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='text'
								name='firstname'
								onChange={(e) => handleChange(e)}
							/>
							<label for='lastname'>Last Name</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='text'
								name='lastname'
								onChange={(e) => handleChange(e)}
							/>
							<label for='email'>Email</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='text'
								name='email'
								onChange={(e) => handleChange(e)}
							/>
							<label for='password'>Password</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								type='password'
								name='password'
								onChange={(e) => handleChange(e)}
							/>
							<label for='confirmPassword'>Confirm Password</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								name='confirmPassword'
								type='password'
								onChange={(e) => handleChange(e)}
							/>
							<label for='address'>Address</label>
							<input
								className='px-2 rounded outline-none bg-white focus:ring-2 ring-blue-500'
								name='address'
								type='text'
								placeholder='Street 123, City, Country'
								onChange={(e) => handleChange(e)}
							/>
							<button
								type='submit'
								className='bg-blue-500 rounded p-2 my-4 text-white'
							>
								Sign Up
							</button>
						</form>
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</section>
	);
};

export default LogReg;
