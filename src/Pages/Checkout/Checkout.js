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
            <h1>Start your journey with these freebies!</h1>
            <div className="check-outinfo">
            <div class="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Shhh... Yes! There's a secret to success</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">GEET ACCESS</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Tips to create a positive radical shift</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">DOWNLOAD</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img3}alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="">Mindsets of successful people</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">FREE GUIDE</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img4} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button className="btn btn-primary">GET ACCESS</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Checkout;