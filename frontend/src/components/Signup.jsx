import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [showPassword,setShowpasswrod] = useState(false)
    const naviget = useNavigate()
  const {isSigningUp,signup} = useAuthStore()
    const [FormData,setFormData]= useState({
        fullname:"narola",
        email:"narolajeeldev@gmail.com",
        password:"narolajeeldev"
    })
    useEffect(()=>{
      signup(FormData)
    },[signup])

    if(isSigningUp){
      alert("Alreday Email Extis , Move To login ")
      naviget("/login") 
    }
  return (
    <div>Signup</div>
  )
}

export default Signup