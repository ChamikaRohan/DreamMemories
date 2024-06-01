import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupPage from './pages/SignupPage.jsx'
import SigninPage from './pages/SigninPage.jsx'
import Home from './pages/Home.jsx'
import WelcomePage from './pages/WelcomePage.jsx'

export default function AuthApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
    </Router>
  )
}
