import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import eyeOpen from '../assets/eye-svgrepo-com.svg'
import eyeClose from '../assets/eye-password-hide-svgrepo-com.svg'
function Signup() {
  const [showPassword, setShowpasswrod] = useState(false)
  const naviget = useNavigate()
  const { isSigningUp, signup } = useAuthStore()
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  })
  const handelLoginSubmit = (e) =>{
   e.preventDefault()
    signup(FormData)
  }
  return (
    <form className="max-w-sm mx-auto" onSubmit={handelLoginSubmit}>
      <label
        htmlFor="email-address-icon"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Your UserName
      </label>
      <div className="mb-2">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin username-success"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
           
            onChange={(e) => setFormData({ ...FormData, fullName: e.target.value })}
          />
        </div>
        <p className="hidden mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">Alright!</span> Username available!
        </p>
      </div>
      <div>
        <>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
               onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
            />
          </div>
        </>

      </div>
       <div>
        <>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900 "
          >
            Your Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <div>
              <input
              type={showPassword ? "text" : "password"}
              id="email-address-icon"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
               onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
            />
            </div>
            <img src={ showPassword ? eyeOpen : eyeClose} alt="" className='w-[20px] absolute right-3 top-3 filter invert brightness-0 cursor-pointer' onClick={()=>setShowpasswrod(!showPassword)}/>

          </div>
        </>
        <button className = "bg-gray-50 block mt-5 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Create A Account</button>
        <p>Alreay Account ? <span className="cursor-pointer">Login</span></p>
      </div>
    </form>

  )
}

export default Signup