import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path = '/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/home' element={<Home/>}></Route>

      </Routes>
    </div>
  )
}


export default App