"use client"
import React from 'react'
import { useLocation } from 'react-router-dom'

const page = () => {
  const location = useLocation()

  return (
    <div className='h-screen'>{location.pathname}</div>
  )
}

export default page