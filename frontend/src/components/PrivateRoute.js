import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'

function PrivateRoute({user, setUser}) {

  return (
    user ? <Home user={user} setUser={setUser} /> : <Navigate to='/login' />
  )
}

export default PrivateRoute