import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import {login,signup} from '../../firebase.config'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {

  const[signState,setSignState]=useState("Sign In")
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  
  const user_auth=async (event)=>{
    
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:<>
    <div className="login">
      <img src={Logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<div className='input-box'>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}type="text" required placeholder=' '/>
            <label className="lll">Your Name</label>
          </div>:<></>}
          
          <div className='input-box'>
            <input type="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder=' '/>
            <label className="lll">Your Email</label>
          </div>
          <div className='input-box'>
            <input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder=' '/>
            <label className="lll">Your Password</label>
          </div>
          <button onClick={user_auth} type='submit'>{signState}</button>
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
    </>
  )
}

export default Login