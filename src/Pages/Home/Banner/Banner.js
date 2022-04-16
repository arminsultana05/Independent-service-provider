import React from 'react';
import photo from '../../../images/banner.png'

import './Banner.css'

const Banner = () => {
    return (
     <div className="banner">
         <div className="">
             <h1 text-bold>I am here</h1>
         </div>
         <div className="">
             <img src={photo} alt="" />
         </div>
          
            
        </div>
    );
};

export default Banner;