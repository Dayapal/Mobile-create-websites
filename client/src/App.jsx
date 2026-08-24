import React from 'react'
import MobileFetch from './components/MobileFetch'
import CreateMobile from './components/CreateMobile'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>

      {/* <CreateMobile/>
      <MobileFetch/> */}

      <Routes>
        
       
        <Route path='/' element={<Navigate to="/login" />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }
        />

        <Route
        path='/mobiles'
        element={
          <ProtectedRoute>
          <MobileFetch/>
          </ProtectedRoute>
        }
        />
        <Route
        path='/create-mobile'
        element={
          <ProtectedRoute>
           <CreateMobile/>
          </ProtectedRoute>
        }
        />
         
      </Routes>


   
    </BrowserRouter>
  )
}

export default App
