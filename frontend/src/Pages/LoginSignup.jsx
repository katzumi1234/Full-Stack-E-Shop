import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

const[state,setState]=useState("Login");

const[fromData,setFromData]=useState({
  username:"",
  password:"",
  email:""
})

const changeHandler = (e)=>{
setFromData({...fromData,[e.target.name]:e.target.value})
}

 const login = async()=>{
  let responseData;
  await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(fromData),
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  
  }
  else{
    alert(responseData.errors)
  }
 }
 const signup = async()=>{
let responseData;
await fetch('http://localhost:4000/signup',{
  method:'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(fromData),
}).then((response)=>response.json()).then((data)=>responseData=data)
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");

}
else{
  alert(responseData.errors)
}
 }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state==="Sign Up"?<input name='username' value={fromData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={fromData.email} onChange={changeHandler} type="email" placeholder='Exemple@gmail.com'/>
          <input name='password' value={fromData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login'>Alredy have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        <div className='loginsignup-agree'>
<input type='checkbox' name=''id=''/>
<p>By continuing, i agree to the terms of use & privacy policy.</p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup
