import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, id, description } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate('/checkout')
        // navigate(`/checkout/${id}`)

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center cart-info ">
                    <small className="">Name:{name}</small>
                    <p>Price: ${price}</p>
                    <p> <small className="font-light">{description}</small></p>
                    <div className="card-actions">
                        <button onClick={() => navigateToServiceDetail()} className='button-infg' >Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;