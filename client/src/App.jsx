import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'


function App() {
  const  [message , setMessage ] = useState("")

  useEffect( ()=> {
    axios.get('/api')
    .then(response => setMessage(response.data))
    .catch(error => console.error('error fetching data:', error));
  }, []);

  return(
    <div>
       <p>{message}</p>
    </div>
  )
}

export default App
