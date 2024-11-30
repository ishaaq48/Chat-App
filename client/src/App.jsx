import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { io } from 'socket.io-client'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import { useEffect } from 'react'
import Signup from './components/Authenticaaation/Signup'
import Login from './components/Authenticaaation/Login'
import ProtectedRoute from './components/Protected/ProtectedRoute'
import ProtectedPage from './components/Protected/ProtectedPage'
import { FormProvider } from './components/context/FormContext'

function App() {
  
  const socket = io('http://localhost:5000')
  useEffect(() =>{
      socket.on('connect', () => {
      console.log(socket)
  })
  }, [])
  
  return (
     <FormProvider>
      <Link to = "/home" className='btn btn-outline-danger m-2'>Home</Link>
      <Routes>
        <Route path='/home' element={<Homepage />}></Route>
          <Route path = "/protected" element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
            } 
            />
              <Route path = "/signup" element={<Signup 
            />} />
            <Route path = "/login" element={<Login 
            />} />
      </Routes>
      </FormProvider>
  )
}

export default App
