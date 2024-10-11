import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen/index'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import ForgotPasswordScreen from './pages/ForgotPasswordScreen'
import DetailsScreen from './pages/DetailsScreen'
import FoodDonationScreen from './pages/FoodDonationScreen'
import MyAccountScreen from './pages/MyAccountScreen'
import AboutUsScreen from './pages/AboutUsScreen'
import LogoutScreen from './pages/LogoutScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomeScreen} />
        <Route path='/login' Component={LoginScreen} />
        <Route path='/register' Component={RegisterScreen} />
        <Route path='/forgot-password' Component={ForgotPasswordScreen} />
        <Route path='/details' Component={DetailsScreen} />
        <Route path='/donate' Component={FoodDonationScreen} />
        <Route path='/my-account' Component={MyAccountScreen} />
        <Route path='/about-us' Component={AboutUsScreen} />
        <Route path='/logout' Component={LogoutScreen} />
      </Routes>
    </Router>
  )
}

export default App
