import React from 'react';
import errorlogo from '../../images/banner_error_404.jpg'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='four-of-four '>
            <img src={errorlogo} alt="" />
            
        </div>
    );
};

export default Notfound;