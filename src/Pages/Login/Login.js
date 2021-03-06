import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import googleLogo from '../../images/googl.png'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
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
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value })
      setErrors({ ...errors, email: "" })
    } else {
      setErrors({ ...errors, email: "Invalid email" })
      setUserInfo({ ...userInfo, email: "" })
    }
  }
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{8,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 8 characters!" });
      setUserInfo({ ...userInfo, password: "" })
    }
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userInfo)
    signInWithEmail(userInfo.email, userInfo.password);

  }
  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Intruder!!")
          break;
        default:
          toast("please input a Valid Password")
      }
    }
  }, [hookError, googleError])

  const resetPassword = async (event) => {
      await sendPasswordResetEmail(userInfo.email);
      if (userInfo.email){
        toast('Sent email')
      }else{
        toast('please Enter the email address')
      }
     

  }
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1 className='text-4xl'>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email'
                onBlur={handleEmailBlur} required/>
            </div>
            {errors?.email && <p className="error-message"><span className='mr-2'><AiOutlineExclamationCircle /></span>{errors.email}</p>}
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input
                onBlur={handlePasswordBlur}
                type='password'
                name='password'
                id='password'
              required/>
            </div>
            {errors?.password && <p className="error-message"><span className='mr-2'><AiOutlineExclamationCircle /></span>{errors.password}</p>}
          </div>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <ToastContainer />
        <p className='redirect'>
          New to Career Coach?{" "}
          <span onClick={() => navigate('/signup')}>Create New Account</span>
        </p>
        <p className='redirect'>Forgate Password? <span className='ml-2 ' onClick={resetPassword}>Reset password</span></p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={() => signInWithGoogle()} className='google-auth' >
            <img src={googleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;