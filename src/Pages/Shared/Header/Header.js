import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className=" ">
      <h1 className='text-5xl Helvetic'>Monika</h1>
      <p className='banner-title'>LIFE CAREER COACH</p>
      <div className="">
        <div className="nav">
          <input className='h-5' type="checkbox" id="nav-check" />
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
            <Link to='/about'>About Me</Link>
            {/* <Link to ='/login'>Login</Link> */}
            {
              user ?(
                <button className='text-white' onClick={()=>signOut(auth)}>Sign Out</button>
              ):<Link to ='/signup'>Login</Link>
              
            }
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;