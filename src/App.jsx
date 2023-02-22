import React, {useEffect,useState} from 'react'
import { auth } from './firebase'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
function App() {
  const [authenticated,setaAuthenticated] = useState(false)
  /*useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        console.log(userAuth) //already logged in
      } else{
        //logged out
      }
    })
    return unsubscribe
  }, [])
  */
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Loginpage setaAuthenticated={setaAuthenticated}/>}></Route> 
    <Route path='/home' element={<Home/>}></Route> 
    </Routes>
    </div>
  )
}

export default App
