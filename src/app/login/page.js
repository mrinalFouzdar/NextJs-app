"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <div>
      Login
      <Link href='/'>Go back to Home Page</Link>
      <br/>
      <button onClick={()=>router.push('/login/loginstudent')}>Go to Student Login page</button>
      <br/>
      <button onClick={()=>router.push('/login/loginteacher')}>Go to Teacher Login page</button>
    </div>
  )
}

export default Login
