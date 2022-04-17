import React from 'react';
import photo from '../../../images/banner.png'

import './Banner.css'

const Banner = () => {
    return (
     <div className="banner">
         <div className="banner-left">
             <h1 className='text-5xl'>Unleash the power within to <br /> create life changing moments.</h1>
             <p className='mt-3'>Make a difference by achieving clarity, better thinking & leading confidently and inspire others……</p>
             <button className='button-banner'>GET STARTED</button>
         </div>
         <div className="">
             <img src={photo} alt="" />
         </div>
          
            
        </div>
    );
};

export default Banner;