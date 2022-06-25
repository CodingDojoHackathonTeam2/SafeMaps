import React from 'react';
import logo from '../public/assets/logo.png';

const Navbar = () => {
	return (
		<div class='navbar bg-blue-500 text-white'>
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
							<a>Browse Locations</a>
						</li>
						<li tabindex='0'>
							<a class='justify-between'>
								Register
								<svg
									class='fill-current'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
								>
									<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
								</svg>
							</a>
							<ul class='p-2'>
								<li>
									<a>For refugees</a>
								</li>
								<li>
									<a>For donors / volunteers</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Why help?</a>
						</li>
					</ul>
				</div>
				<a class='btn btn-ghost normal-case text-xl'>
					<img src={logo} className='w-8 h-8' alt='' />
					safeMaps
				</a>
			</div>
			<div class='navbar-center hidden lg:flex'>
				<ul class='menu menu-horizontal p-0'>
					<li>
						<a>Browse Locations</a>
					</li>
					<li tabindex='0'>
						<a>
							Sign In
							<svg
								class='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
							>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</a>
						<ul class='p-2'>
							<li>
								<a>Sign in as refugee</a>
							</li>
							<li>
								<a>Sign in as donor</a>
							</li>
						</ul>
					</li>
					<li>
						<a>Why help?</a>
					</li>
				</ul>
			</div>
			<div class='navbar-end'>
				<a class='btn btn-accent bg-yellow-300 hover:bg-yellow-500 text-black font-bold'>
					Become a donor
				</a>
			</div>
		</div>
	);
};

export default Navbar;
