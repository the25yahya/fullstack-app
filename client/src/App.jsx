import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import axios from "axios"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return(
    <BrowserRouter>
      <div className='bg-slate-100 h-full w-full flex'>
        <Navbar />
      </div>
    </BrowserRouter>

  )
}

export default App
