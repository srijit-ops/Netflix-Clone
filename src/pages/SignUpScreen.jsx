import React , {useRef} from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
function SignUpScreen({setaAuthenticated}) {
  const navigate = useNavigate();
  const emailRef= useRef(null)
  const passwordRef=useRef(null)

  function signUpNow(e){
    e.preventDefault() //it'll stop the page from refreshing whenever we clicl a button
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(()=>{
      alert("You're signed up successfully")
      navigate("/home");
    })
    .catch((error)=>console.log("error"))
  }

  function signIn(e){
    e.preventDefault() //it'll stop the page from refreshing whenever we clicl a button
    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(()=>{
      navigate("/home");
      setTimeout(()=>alert("You're signed in successfully"),2000)
      setaAuthenticated(true)
    })
    .catch((error)=>{
      alert("You don't have an account. pls sign up with same credentials!")
      navigate("/");
      setaAuthenticated(false)
    })
  }
  return (
    <div className='p-5' style={{background: "rgba(0,0,0,0.85)",width: '45rem'}}>
        <h2 className='mb-4' style={{textAlign:"left"}}>Sign In</h2>
        <form className='d-flex flex-column'>
            <input ref={emailRef} placeholder='Email' type='email' className='px-3 py-2 mb-2'/>
            <input ref={passwordRef} placeholder='Password' type='password' className='px-3 py-2 mt-3'/>
            <small className='mb-3' style={{textAlign:"left", color:"darkgray"}}>Password should be of minimum 6 digits.</small>
            <button type='submit' className='px-3 py-2 mt-4' style={{backgroundColor: "rgb(229, 9, 20)",
    color: "white",
    fontWeight: "600"}} onClick={signIn}>Sign In</button>
    <p className='mt-3'><span style={{color:"gray"}}>Don't have an account?</span> <a href='' style={{color:"white"}} onClick={signUpNow}>Sign up now!</a></p>
        </form>
    </div>
  )
}

export default SignUpScreen