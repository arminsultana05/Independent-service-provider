import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            JoGeek
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
            <Link to='/'></Link>
            <Link to='/home'>Home</Link>
            <Link to='/checkout'>Check Out</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about me'>About Me</Link>
          
        </div>
      </div>
    );
};

export default Header;