import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
const Login = () => {
  const[signState,setSignState]=useState("Sign In")
  return (
    <div className="login">
      <img src={Logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<div className='input-box'>
            <input type="text" required/>
            <label className='lll'>Your Name</label>
          </div>:<></>}
          
          <div className='input-box'>
            <input type="email" required />
            <label className='lll'>Your Email</label>
          </div>
          <div className='input-box'>
            <input type="password" required/>
            <label className='lll'>Your Password</label>
          </div>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" className='check'/>
              <label >Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Sign In'?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have account?<span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login