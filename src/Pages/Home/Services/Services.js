import React from 'react';
import useServices from '../../../Customhooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services ,setServices] = useServices()
    
    return (
        <div>
            <h1>This is Services: {services.length}</h1>
           <div className="card-title">
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