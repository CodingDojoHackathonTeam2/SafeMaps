import React from 'react';
import logo from '../public/assets/logo.png';
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
							<a>Why help?</a>
						</li>
					</ul>
				</div>
				<a className='btn btn-ghost normal-case text-xl' onClick={() => navigate('/')}>
					<img src={logo} className='w-8 h-8' alt='' />
					safeMaps
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
						<a>Why help?</a>
					</li>
				</ul>
			</div>
			<div class='navbar-end'>
				<a class='btn btn-accent bg-yellow-300 hover:bg-yellow-500 text-black font-bold '>
					Become a donor
				</a>
			</div>
		</div>
	);
};

export default Navbar;
