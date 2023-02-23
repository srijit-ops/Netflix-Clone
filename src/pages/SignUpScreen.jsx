import React , {useRef, useState} from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
function SignUpScreen() {
  const navigate = useNavigate();
  const emailRef= useRef(null)
  const passwordRef=useRef(null)
  const [isSignup,setIsSignup] = useState(false)

  function signUp(){
    if(!emailRef.current.value || !passwordRef.current.value){
      alert("Wrong Credentials")
      return;
    }
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(()=>{
      alert("You're signed up successfully")
      navigate("/home");
    })
   
  }

  function signIn(){
    if(!emailRef.current.value || !passwordRef.current.value){
      alert("Wrong Credentials")
      return;
    }
    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(()=>{
      navigate("/home");
      setTimeout(()=>alert("You're signed in successfully"),2000)

    })
    .catch((error)=>{
      alert("You don't have an account. pls sign up with same credentials!")
      navigate("/");
    })
  }
  
  return (
    <div className='p-sm-5 p-4 signin_form' style={{background: "rgba(0,0,0,0.85)",width: '45rem'}}>
        <h2 className='mb-4' style={{textAlign:"left"}}>Sign {!isSignup?"In":"Up"}</h2>
        <form className='d-flex flex-column'>
            <input ref={emailRef} placeholder='Email' type='email' className='px-3 py-2 mb-2'/>
            <input ref={passwordRef} placeholder='Password' type='password' className='px-3 py-2 mt-3'/>
            <small className='mb-3' style={{textAlign:"left", color:"darkgray"}}>Password should be of minimum 6 digits.</small>
            <button type='submit' className='px-3 py-2 mt-4' style={{backgroundColor: "rgb(229, 9, 20)",
    color: "white",
    fontWeight: "600",outline: "none",
    border: "none",
    borderRadius: "5px"}} onClick={(e)=>{
    e.preventDefault() 
      isSignup?signUp():signIn()
    }}>Sign {!isSignup?"In":"Up"}</button>
    <p className='mt-3'><span style={{color:"gray"}}>Don't have an account?</span> <p style={{color:"white",textDecoration:'underline',cursor:'pointer'}} onClick={()=>setIsSignup(true)}>Sign up now!</p></p>
        </form>
    </div>
  )
}

export default SignUpScreen