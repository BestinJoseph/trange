import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const {auth} = useSelector( state => state )

    return auth.isAuthenticated ? <Navigate to="/" /> : children
}

export default PublicRoute
