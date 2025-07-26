import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useState } from 'react'
import { useEffect } from 'react'

function Login() {

  const { login, isLoggingIng } = useAuthStore()
  const [FormData, setFormData] = useState({
    fullname: "narola",
    email: "narolajeeldev@gmail.com",
    password: "narolajeeldev"
  })
  useEffect(() => {
    login(FormData)
  }, [login])

  return (
    <div>Login</div>
  )
}

export default Login