import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupPage from './pages/SignupPage.jsx'
import SigninPage from './pages/SigninPage.jsx'
import Home from './pages/Home.jsx'

export default function AuthApp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
    </Router>
  )
}
