import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
function Loginpage({setaAuthenticated}) {
  const [signin,setSignin]=useState(false)
  return (
    <div>
        <div className="login_bg">
        <div className="login_gradient"></div>
        <div className="row justify-content-between align-items-center p-3" style={{width:"100%",position: "fixed",
    top: "0"}}>
                <div className="col-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" style={{width:"100%"}}></img>
                </div>
                <div className="col-1">
                <button type="button" class="btn btn-danger" style={{width:"100%",backgroundColor: "#e50914",
    borderRadius: "4px"}} onClick={()=>setSignin(true)}>Sign in</button>
                </div>
        </div>
          <div className="login_body">
            {signin?<SignUpScreen setaAuthenticated={setaAuthenticated}/>:(
              <>
              <h1 className='mb-3'>Unlimited film, TV programs and more!</h1>
              <h4 className='mb-4 fw-light'>Watch anywhere. Cancel at anytime.</h4>
              <h6 className='mb-3'>Ready to wacth? Enter your email to create or restart your membership.</h6>
              <div className="login_input mt-4">
                <form className='d-flex justify-content-center align-items-center'>
                  <input className="col-9 px-3 py-2"  type='email' placeholder="Email address" style={{outline:"0",display:"none"}}/>
                  <button className="col-5 px-3 py-2" type="button" style={{backgroundColor: "#e50914",
      color: "white",
      outline: "none",
      border: "none",
      borderRadius: "0",
      height: "2.64rem", fontWeight:"600"}} onClick={()=>{
        setSignin(true)
        
      }}>GET STARTED</button>
                </form>
              </div>
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default Loginpage