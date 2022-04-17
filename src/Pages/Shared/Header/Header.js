import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <div className="">
         <h1 className='text-5xl Helvetic'>Monika</h1>
         <p className='banner-title'>LIFE CAREER COACH</p>
          <div className="nav">
        <input className='h-5' type="checkbox" id="nav-check"/>
        <div className="nav-header ">
          <div className="nav-title ml-3 mt-2">
            Career Coach
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links mr-5 mt-2">
            <Link to='/'></Link>
            <Link to='/home'>Home</Link>
            <Link to='/checkout'>Check Out</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about me'>About Me</Link>
          
        </div>
      </div>
       </div>
    );
};

export default Header;