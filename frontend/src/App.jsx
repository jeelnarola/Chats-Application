import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import Signup from './components/Signup'

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  if (isCheckingAuth && !authUser) {
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 " />
    </div>
  }
  console.log("authUser :- ", authUser ? "home" : "login");

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to='/' />} />
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/' />} />
          {/* <Route path='/logout' element={!authUser ? <Login /> : <Navigate to='/' />} /> */}
        </Routes>

      </div>
    </>
  )
}

export default App
