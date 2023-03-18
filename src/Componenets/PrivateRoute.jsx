import React from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateRoute(props) {
  const user = localStorage.getItem('user')

  if (user)
    return props.children

  return <Navigate to="/" />
}
