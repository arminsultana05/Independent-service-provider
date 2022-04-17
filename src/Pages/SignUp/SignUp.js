import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
        confirmPasswork:'',
    });
    const [errors, setErrors] =useState({
        email:'',
        password:'',
        general:'',
    })
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
        const navigate =useNavigate();
        const location = useLocation();
    
        const from = location.state?.from?.pathname || "/";

        useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    const handleEmailBlur = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordBlur = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordbBlur = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };
    if(user|| googleUser ){
        navigate('/')
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
          <h1 className='text-4xl'>Sign Up</h1>
          <form onSubmit={handleLogin}>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <div className='input-wrapper'>
                <input onBlur={ handleEmailBlur} type='text' name='email'  id='email' />
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
              {errors?.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className='input-field'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <div className='input-wrapper'>
                <input
                onBlur={ handleConfirmPasswordbBlur}
                  type='password'
                name='password'
                  id='password'
                />
              </div>
              </div>
             
            <button type='submit' className='auth-form-submit'>
              SignUp
            </button>
          </form>
          <ToastContainer />
          <p className='redirect'>
           Already have an account?{" "}
            <span onClick={()=>navigate('/login')}>Login</span>
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

export default SignUp;