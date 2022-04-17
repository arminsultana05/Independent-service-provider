import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {checkoutId} =useParams();
    return (
        <div>
            <h1>This is check out:{checkoutId}</h1>
            
        </div>
    );
};

export default Checkout;