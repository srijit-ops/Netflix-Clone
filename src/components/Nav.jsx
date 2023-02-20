import React, { useEffect, useState }  from 'react'

function Nav() {
    const [navBlack,navBlacker] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            navBlacker(true)
        }else navBlacker(false)
      })
    }, [])
    let nav_modifier=navBlack?"nav_black":""
  return (
    <div className={`nav ${nav_modifier}`}>
        <div className="row justify-content-between align-items-center py-4 px-3" style={{width:"100%",marginRight: "0!important"}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' className='brand_logo'/>
                <img src='https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png' className='avatar'/>
        </div>
    </div>
  )
}

export default Nav