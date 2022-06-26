import React,{useRef,useEffect} from 'react'

import Geo from '../components/icons/Geo'
import Check from '../components/icons/Check'
import Social from '../assets/icons/Connection.png'
import Faq from '../components/icons/Faq'
import Bed from '../components/icons/Bed'
import Contact from '../components/icons/Contact'
import People from '../components/icons/People'
import Donations from '../components/Donations'

const Landing = () => {

  return (
    < >
    
    <div className=' mx-auto  h-screen bg-yellow-300' >
      <div className='container mx-auto flex justify-center pt-52'>
        <p className='text-center text-6xl font-semibold '>
                            Safe <span className='text-center text-4xl text-blue-900 font-black'>HOMES</span>❤
                            <br></br>
                            for those ukranian people
          <br></br>
          <br></br>
          <br></br>    
        </p>
          <br></br>
          <br></br>
      </div>

      <div className='mt-10 flex h-10 justify-center content-around gap-20'>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded-full">
          host refugees
          </button>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Donations
          </button>
      </div>
    </div>

   <div className='container mx-auto pt-24 pb-24  '>
      <h1 className='text-center text-6xl pb-6'>
                  your help is very important
      </h1>

    <p className='text-center mx-auto text-xl'>
      <span className='text-blue-500'>
        SafeMaps
      </span>
      will fund temporary housing for up to 100,000 people fleeing 
      <span> Ukraine ❤</span>
      ,regardless of their nationality, racial or ethnic origin, or how they identify.
    </p>

    <p className='text-center text-xl'>
      You can offer your space for this cause for free through
      <span className='text-blue-500'>
        SafeMap.org
      </span>,
      or make a donation that will help finance the stays of those who need it most.
    </p>
   </div>


    <section className='mx-auto h-96 flex justify-center content-evenly '>
      <div className="flex gap-24">
        <div className="flex-initial w-64 ">
          <p className='text-center text-4xl pt-32'>
            texto bonito para presentar safemap/safeHome
          </p>
        </div>

        <div className="flex-initial w-64 gap-y-24">
          <Geo />
        </div>
      </div>
    </section>
  
    
    <section className='mx-auto h-96 flex justify-center content-evenly pt-20  '>
      <div className="flex gap-24 ">
        <div className="flex-initial w-64  ">
          <Faq/>
        </div>

        <div className="flex-initial w-64 h-64 gap-y-24 ">
          <h1 className='text-left text-4xl'>
            Ofrece un alojamiento gratuito
          </h1>
          <br></br>
          <h2 className='text-left text-2xl'>
          ¿Qué debo saber?
          </h2>
        </div>
      </div>
    </section>

    <section className='mx-auto flex justify-center pt-20 border-t-4'>
      <div className="inline-flex gap-x-10 ">
        <div className="flex-1">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <Bed/>
              <div class="font-bold text-xl mb-2 inline-flex gap-2"> <Check height={24} /> Room and Services </div>
              
              <p class="text-gray-700 text-base">
                Asegúrate de que tus huéspedes cuenten con una cama cómoda y servicios básicos durante la estancia,
              que puede durar desde unos días hasta varias semanas. Más información sobre cómo hospedar a personas refugiadas
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4 ">
                <Contact/>
                <p class="font-bold text-xl mb-2 inline-flex gap-2">
                  <Check height={24}/>
                  how do you contact
                </p>
                
                  <p class="text-gray-700 text-base">
                  SafeMap colabora con organizaciones sin ánimo de lucro que comprueban
                  si los huéspedes refugiados cumplen los requisitos del programa y les ofrecen
                  ayuda antes, durante y después de la estancia.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
        <div className="flex-1">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <People/>
              <div class="font-bold text-xl mb-2 inline-flex gap-2"> <Check height={24}/>Guest Arrival</div>
                <p class="text-gray-700 text-base">
                  receive your guest with a good smile
                </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <div className='pt-40'>
      <Donations/>
    </div>
      
   
    
    


    
   
    </>
  )
}

export default Landing;