import React from 'react'
import safe from '../assets/icons/logo_ishelter_1.png'

const Footer = () => {

    
  return (
    <>
    <div className="pt-16 grid grid-rows-2 grid-flow-col gap-6 bg-slate-800">
      <div className='inline-block mx-auto'>
        <img src={safe} className='h-20 flex justify-center' alt='logo'></img>
              <p className='text-center text-xl text-white'>
              <span className="text-blue-500"><span className="text-yellow-400">i</span>Shelter</span>
              </p>
      </div>

      <div className='mx-auto inline-block justify-center'>
        <p className='text-lg text-center text-white hover:text-blue-700'>Privacy Policy * Security Policy * safeMaps © 2022</p>
        <p className='text-blue-400 align-middle text-center'>Slava <span className='text-yellow-400'>Ukrania</span></p>
        </div>
    </div>
    </>
    
  )
}

export default Footer

