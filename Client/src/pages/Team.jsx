import React from 'react'
import rene from '../assets/icons/rene.png'
import git from '../assets/icons/git.png'
import li from '../assets/icons/li.png'
import damian from '../assets/icons/damian.jpg'
import stuart from '../assets/icons/stuart.png'
import jhomar from '../assets/icons/jhomar.png'
import lino from '../assets/icons/lino.jpeg'
import learon from '../assets/icons/learon.png'

const Team = () => {
  return (
    <div  className='h-screen mx-auto flex flex-wrap justify-center gap-x-32 '>
    <div data-aos='fade-right' data-aos-duration='1000' class="flex pt-24">
            <div  className='w-64'>
            <figure  class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={rene} alt="rene" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        Rene Caceres
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Front - end
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                        <a href='https://github.com/caceresrene'><img src={git} alt='gitlogo'/></a>
                        <a href='https://www.linkedin.com/in/renecaceresdeveloper/'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
        </div>
        <div  class="flex pt-24">
            <div data-aos='fade-down' data-aos-duration='1000' className='w-64'>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={damian} alt="" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        Damian Cardenas
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Front - end
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                    <a href='https://github.com/Mauffin'><img src={git}/></a>
                    <a href='https://www.linkedin.com/in/damian-cardenas/'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
        </div>
        <div class="flex pt-24">
            <div data-aos='fade-up' data-aos-duration='1000' className='w-64'>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={stuart} alt="stuart" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                    Stuart Yee
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                    BackEnd - REST APIs
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                    <a href='https://github.com/Stuart-Yee'><img src={git}/></a>
                    <a href='https://www.linkedin.com/in/stuart-yee/'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
        </div>
        <div class="flex pt-24">
            <div data-aos='fade-down' data-aos-duration='1000' className='w-64'>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={jhomar} alt="jhomar" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                    Jhomar Astuyauri
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                    BackEnd - REST APIs
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                    <a href='https://github.com/Jhomar1158-ux'><img src={git}/></a>
                    <a href='https://www.linkedin.com/in/jhomar-astuyauri/'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
        </div>
        <div class="flex pt-24">
            <div data-aos='fade-left' data-aos-duration='1000' className='w-64'>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={lino} alt="lino" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                    Lino Cruz
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                    Front - end
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                    <a href='https://github.com/LinoCruz'><img src={git}/></a>
                    <a href='https://www.linkedin.com/in/lino-cruz-519597234/'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
        </div>
        <div class="flex pt-24">
            <div data-aos='fade-left' data-aos-duration='1000' className='w-64'>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img class="w-24 h-24 rounded-full mx-auto" src={learon} alt="learon" width="384" height="512"/>
                <div class="pt-6 text-center space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                    Learon
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                    Front - end
                    </div>
                    </figcaption>
                    <blockquote className='inline-flex gap-4'>
                    <a href='https://github.com/leeaarron'><img src={git}/></a>
                    <a href='#'><img src={li} className="h-8 w-8"/></a>
                    </blockquote>
                </div>
            </figure>
            </div>
            
        </div>
        

    </div>
  )
}

export default Team