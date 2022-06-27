import React from 'react';
import Logo from '../assets/icons/logo_ishelter_1.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	let navigate = useNavigate();

	return (
		<div class='navbar bg-blue-500 text-white sticky top-0 z-50'>
			<div class='navbar-start'>
				<div class='dropdown'>
					<label tabindex='0' class='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabindex='0'
						class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52'
					>
						<li>
							<a onClick={() => navigate('/map')}>Browse Locations</a>
						</li>
						<li>
							<a onClick={() => navigate('/login')}>Sign In</a>
						</li>
						<li>

							<a href='#why' className='scroll-smooth'>Why help?</a>
						</li>
					</ul>
				</div>
				<a onClick={() => navigate('/')} className='btn btn-ghost normal-case text-xl' >
					<img src={Logo}  className='h-8 w-8 text-white' alt='logo'/>
					<span className='text-yellow-500'>i</span>Shelter

				</a>
			</div>
			<div class='navbar-center hidden lg:flex'>
				<ul class='menu menu-horizontal p-0'>
					<li>
						<a onClick={() => navigate('/map')}>Browse Locations</a>
					</li>
					<li>
						<a onClick={() => navigate('/login')}>Sign In</a>
					</li>
					<li>

						<a href='#why' className='scroll-smooth'>Why help?</a>

					</li>
				</ul>
			</div>
			<div class='navbar-end'>
				<a onClick={() => navigate('/login')} class='btn btn-accent bg-yellow-300 hover:bg-yellow-500 text-black font-bold '>
					Sing in
				</a>
			</div>
		</div>
	);
};

export default Navbar;
