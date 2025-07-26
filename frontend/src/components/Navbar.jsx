import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useEffect } from 'react'

function Navbar() {
  const { logout, authUser } = useAuthStore()

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    console.log("authUser changed:", authUser)
  }, [authUser])
  
  return (
    <>
    <h1>Navbar</h1>
    <button className="btn btn-neutral" onClick={handleLogout}>LogOut</button>
        {/* <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button> */}
    </>
  )
}

export default Navbar