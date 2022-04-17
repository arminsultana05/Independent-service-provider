import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <div className='auth-form-container '>
        <div className='auth-form'>
          <h1 className='text-4xl'>Login</h1>
          <form>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input type='text' name='email'  id='email' />
              </div>
              {/* {email.error && (
                <p className='error'>
                  <AiOutlineExclamationCircle /> {email.error}
                </p>
              )} */}
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <div className='input-wrapper'>
                <input
                  type='password'
           
                  name='password'
                  id='password'
                />
              </div>
              {/* {password.error && (
                <p className='error'>
                  <AiOutlineExclamationCircle /> {password.error}
                </p>
              )} */}
            </div>
            <button type='submit' className='auth-form-submit'>
              Login
            </button>
          </form>
          <p className='redirect'>
            New to Career Coach?{" "}
            <span onClick={()=>navigate('/signup')}>Create New Account</span>
          </p>
          <div className='horizontal-divider'>
            <div className='line-left' />
            <p>or</p>
            <div className='line-right' />
          </div>
          <div className='input-wrapper'>
            <button className='google-auth' >
              <img  alt='' />
              <p> Continue with Google </p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;