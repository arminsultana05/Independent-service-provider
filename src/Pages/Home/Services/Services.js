import React from 'react';
import useServices from '../../../Customhooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services ,setServices] = useServices()
    
    return (
        <div>
            <h1 className='text-4xl text-center mt-7'>The services that I provide</h1>
           <div className="card-title md: grid grid-cols-2">
           {
               services.map(service => <Service
               key ={service.id}
               service={service}></Service>)
            }
           </div>
            
            
        </div>
    );
};

export default Services;