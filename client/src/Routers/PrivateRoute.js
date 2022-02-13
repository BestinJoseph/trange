import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    // const isAuthenticated = false
    const { auth } = useSelector( state => state )
    
    return auth.isAuthenticated ? children : <Navigate to="/signin" />
}

export default PrivateRoute
