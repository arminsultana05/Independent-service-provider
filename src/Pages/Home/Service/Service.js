import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className='button-infg' >Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;