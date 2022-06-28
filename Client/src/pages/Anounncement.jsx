import React,{useState} from 'react'
import axios from 'axios'
import * as Tabs from '@radix-ui/react-tabs';


const Anounncement = () => {

    const[name,setName] = useState('');
    const[country,setCountry] = useState('');
    const[address,setAddress] = useState('');
    const[people_capacity,setPeople_capacity] = useState('');
    const[lodging_time,setLodging_time] =useState('');
    const[language,setLanguage] =useState('');
    const[coordinates,setCoordinates] = useState('');


    const[pets,setPets] =useState(false)
    const[legal_assistance,setLegal_assistance] =useState(false)
    const[kid_friendly,setKid_friendly] =useState(false)
    const[transportation,setTransportation] =useState(false)
    const[childcare_support,setChildcare_support] =useState(false)
    const[first_aid,setFirst_aid] =useState(false)




	const Anounncements = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/api/Anounncements/create',{
                name:name,country:country,address:address,people_capacity:people_capacity,
                lodging_time:lodging_time,language:language,coordinates:coordinates,
                pets:pets,legal_assistance:legal_assistance,kid_friendly:kid_friendly,
                transportation:transportation,childcare_support:childcare_support,
                first_aid:first_aid
            })
            .then((res)=>{
                console.log(res,'res');
                console.log(res.data,'is res data!');
                navigate('/map');
            })
			
			.catch((err) => {
				console.log(err);
				setErrors(err.response.data.errors);
			});
	};


  return (



    <>
        <div className='flex  justify-center '>
       

            <form onSubmit={Anounncements}>
        <br></br>
        <br></br>
            <div className='flex-initial gap-y-3 bg-slate-200'>
            <label htmlFor="name" id='name'>nombre</label>
            <input type='text' id='name' className='px-2 py-1 gap-y-3 rounded outline-none bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setName(e.target.value)}/>
            <br></br>
            <label htmlFor="">country</label>
            <input type='text' id='country' className='px-2 py-1 gap-y-4 rounded outline-none bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setCountry(e.target.value)}/>
            <br></br>
            <label htmlFor="">address</label>
            <input type='text' id='address' className='px-2 py-1  rounded outline-none bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setAddress(e.target.value)}/>
            <br></br>
            <label htmlFor="">people capacity</label>
            <input type='numb' min='0' id='people_capacity'  className='px-2  py-1 rounded  bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setPeople_capacity(e.target.value)}/>
            <br></br>
            <label htmlFor="">lodging time</label>
            <input type='text' id='lodging_time' className='px-2 py-1  rounded outline-none bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setLodging_time(e.target.value)}/>
            <br></br>
            <label htmlFor="language">language</label>
            <input type='text' id='language' className='px-2 py-1  rounded outline-none bg-white focus:ring-2 ring-blue-500' 
            onChange={(e) => setLanguage(e.target.value)}/>
            <br></br>
            <label htmlFor="coordinates">coordinates</label>
            <input type='text' id='coordinates' className='px-2  py-1 rounded outline-none bg-white focus:ring-2 ring-blue-500'
            onChange={(e) => setCoordinates(e.target.value)}/>

            <br></br>
            <br></br>
            <label htmlFor='pets' >Pets: 🐶 </label>
            <input type='checkbox' id='pets' onChange={(e) => setPets(e.target.value)}/>
            <br></br>
            <label htmlFor='legal_assistance' >legal assistance: 👨‍⚖️</label>
            <input type='checkbox' id='legal_assistance' onChange={(e) => setLegal_assistance(e.target.value)}/>
            <br></br>
            <label htmlFor='kid_friendly' >kid friendly: 🧒</label>
            <input type='checkbox' id='kid_friendly' onChange={(e) => setKid_friendly(e.target.value)}/>
            <br></br>
            <label htmlFor='transportation' >transportation: 🚗</label>
            <input type='checkbox' id='transportation' onChange={(e) => setTransportation(e.target.value)}/>
            <br></br>
            <label htmlFor='childcare_support' >childcare support: 🤱 </label>
            <input type='checkbox' id='childcare_support' onChange={(e) => setChildcare_support(e.target.value)}/>
            <br></br>
            <label htmlFor='first_aid' >first_aid:🏥</label>
            <input type='checkbox' id='first_aid' onChange={(e) => setFirst_aid(e.target.value)}/>
            <br></br>
                
            <button type='submit' className='bg-blue-500 rounded p-2 my-4 text-white'>
							Submit
			</button>
            </div>
            </form>

        </div>
    </>
    
  )
}

export default Anounncement;