import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import { auth } from './firebase'
function App() {
const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify({ email: user.email })) 
        navigate("/home")
      } else {
        localStorage.clear()
        navigate("/")
      }
    })
    return unsubscribe
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage />}></Route>
        <Route path='/home' element={
          <Home />
       }></Route>
      </Routes>
    </div>
  )
}

export default App
