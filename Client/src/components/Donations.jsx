import React from 'react'
import Donation from './icons/Donation'

const Donations = () => {
  return (
    <>
    <div></div>
        <div className="flex mx-auto">
            <div className="flex-1 col-span-1 w-64">
                <div className='flex justify-center'>
                    <p className='text-left text-5xl'>Haz un donativo</p>
                    
                </div>
                <div className='flex '>
                <p className='text-center'>
                    Cada donación ayuda a proporcionar alojamiento de emergencia a aquellos que huyen de Ucrania
                    y otras personas que se encuentran en situación de crisis.
                </p>
                </div>
                

                <br></br>
                <br></br>
                <br></br>
                <div className='' >
                
                <p className=''>Cómo funcionan los donativos</p>
                <p>Hasta el último céntimo se destinará a buscar y ofrecer 
                    alojamientos temporales a las personas que lo necesitan.</p>
                <p>Las estancias del programa son completamente gratuitas para los huéspedes.</p>
                <p>Podrás desgravarte los donativos que hagas cuando así lo permita la legislación local de tu zona.</p>
              
                </div>
               
                 
                 
                 <br></br>
                 <br></br>
                 <br></br>
                 <div className='flex justify-end'>
                    <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Donations
                    </button>
                </div>
                
            </div>
            <div className="flex-1 w-32 ">
                <Donation/>
            </div>
        </div>
    </>
    
  )
}

export default Donations