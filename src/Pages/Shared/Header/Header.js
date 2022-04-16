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
            {/* <Link to='/'></Link>
            <Link to='/home'>Home</Link>
            <Link>Check Out</Link>
            <Link>Blogs</Link>
            <Link>About Me</Link> */}
          <a href="//github.io/jo_geek" target="_blank">Github</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
        </div>
      </div>
    );
};

export default Header;