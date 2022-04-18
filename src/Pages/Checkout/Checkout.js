import React from 'react';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import './Checkout.css'
// import { useParams } from 'react-router-dom';

const Checkout = () => {
    // const {checkoutId} =useParams();

    return (
        <div className=' '>
            <h1 className='text-center text-left text-4xl mt-4 '>Start your journey with these freebies!!!</h1>
            <div className="check-outinfo mb-5">
            <div class="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Shhh... Yes! There's a secret to success</h2>
                    <p className='text-left'><ul>
                        <li>Use rejection as motivation. </li>
                        <li>Working hard is the best way to network</li>
                        <li>Don't wait for permission</li></ul></p>
                    <div className="card-actions">
                        <button className="button-banner">GEET ACCESS</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Tips to create a positive thinking</h2>
                    <p className='text-left'><ul><li>Open yourself up to humor.</li>
                    <li>Practice positive self-talk</li>
                    <li>Identify your areas of negativity</li></ul></p>
                    <div className="card-actions">
                        <button className="button-banner">DOWNLOAD</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img3}alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Mindsets of successful people</h2>
                    <p className='text-left'><ul><li>Ditch the Fixed Mindset and Go For Growth.</li>
                    <li>Stop Fearing Failure</li>
                    <li>Don't Be Afraid to Break the Rules</li></ul></p>
                    <div className="card-actions">
                        <button className="button-banner">FREE GUIDE</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img4} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Do you have healthy habbits?</h2>
                    <p className='text-left'><ul><li>Exercising at least five times a week</li>
                    <li>Getting at least eight hours of sleep every night.</li>
                    <li>Eating breakfast every day.</li></ul></p>
                    <div class="card-actions">
                        <button className="button-banner">GET ACCESS</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default Checkout;