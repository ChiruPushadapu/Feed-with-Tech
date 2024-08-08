import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/index'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomeScreen} />
        <Route path='/login' Component={LoginScreen} />
        <Route path='/register' Component={RegisterScreen} />
      </Routes>
    </Router>
  )
}

export default App
