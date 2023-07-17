
import React from 'react'
import { Outlet } from 'react-router-dom'
import "../assets/css/dashboard.css"

function dashboard() {
  return (
    <div className='container-screen'>
    <Outlet />
    </div>
  )
}

export default dashboard