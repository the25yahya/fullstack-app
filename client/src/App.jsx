import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import axios from "axios"
import './App.css'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'


function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard' element = {<Dashboard />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
