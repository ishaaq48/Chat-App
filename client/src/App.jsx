import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { io } from 'socket.io-client'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import { useEffect, useState } from 'react'
import Signup from './components/Authenticaaation/Signup'
import Login from './components/Authenticaaation/Login'

function App() {
  const [ formInputs, setFormInputs] = useState({})
  const socket = io('http://localhost:5000')

  useEffect(() =>{
      socket.on('connect', () => {
      console.log(socket)
  })
  }, [])
  
  return (
    <>
      <Link to = "/home" className='btn btn-outline-danger m-2'>Home</Link>
      <Routes>
          <Route path = "/home" element={<Homepage />} />
          <Route path = "/signup" element={<Signup 
              formInputs = {formInputs}
              setFormInputs = {setFormInputs}
            
            />} />
          <Route path = "/login" element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
