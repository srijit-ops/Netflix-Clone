import React, { useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Nav() {
    const [navBlack,navBlacker] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            navBlacker(true)
        }else navBlacker(false)
      })
    }, [])
    let nav_modifier=navBlack?"nav_black":""

    const handleLogout = async ()=>{
      await auth.signOut()
      navigate("/")
      setTimeout(()=>{
        alert("Loggedout successfully")
      },10)
    }
  return (
    <div className={`nav ${nav_modifier}`}>
        <div className="row justify-content-between align-items-center py-4 px-3" style={{width:"100%",marginRight: "0!important"}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' className='brand_logo'/>
                <button type="button" className="btn btn-danger logout" onClick={handleLogout}>Logout</button>
                
        </div>
    </div>
  )
}

export default Nav