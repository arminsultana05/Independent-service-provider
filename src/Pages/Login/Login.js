import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location =useLocation()
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailBlur = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, email: ""})      
        } else {
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }

        

       
    }
    const handlePasswordBlur = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        } else {
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
        
    }
    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);
        
    }
    const from = location.state?.from?.pathname || "/checkout";
    useEffect(()=>{
        if (user) {
            navigate(from);
        }
    },[user])
    if(googleUser){
        navigate('/home')
    }
    useEffect(() => {
        const error = hookError || googleError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])
   
    return (
        <div className='auth-form-container '>
        <div className='auth-form'>
          <h1 className='text-4xl'>Login</h1>
          <form onSubmit={handleLogin}>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input type='text' name='email'  id='email'
                onBlur={handleEmailBlur} />
              </div>
              {errors?.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <div className='input-wrapper'>
                <input
                onBlur={handlePasswordBlur}
                  type='password'
                    name='password'
                  id='password'
                />
              </div>
              {errors?.password && <p className="error-message">{errors.password}</p> }
            </div>
            <button type='submit' className='auth-form-submit'>
              Login
            </button>
          </form>
          <ToastContainer />
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
            <button onClick={()=>signInWithGoogle()} className='google-auth' >
              <img  alt='' />
              <p> Continue with Google </p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;