import React from 'react'
import { Outlet } from 'react-router-dom';
import Dashboard from '../Component/Dashboard'

function Layor() {
  return (
    <div>
      <Dashboard/>
    
  
    <Outlet/>
    </div>
  )
}

export default Layor;