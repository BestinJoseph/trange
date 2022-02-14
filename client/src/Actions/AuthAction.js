// import jwt_decode from 'jwt-decode'
// import { Navigate } from 'react-router-dom'

import { isSignInUser } from '../Apis/AuthApi'
import { GET_ERRORS, SET_CURRENT_USER, USER_REGISTER, USER_LOADING } from '../Constants/AuthConstants'
import setAuthToken from '../utils/setAuthToken'

export const userLogin = (user) => (dispatch) => {
    isSignInUser(user).then( ({data}) => {
        const {errors, token, userData} = data
        if (token) {
            localStorage.setItem("jwtToken", token)
            setAuthToken(token)
            // const decode = jwt_decode(token)
            dispatch({type: SET_CURRENT_USER, payload: userData })
        } else {
            console.log('nice.')
            dispatch({type: GET_ERRORS, payload: errors })
        }
    })
    
}

export const setCurrentUser = (decode, dispatch) => {
    return {type: SET_CURRENT_USER, payload: decode }
}

export const setUserLoading = () => {
    return ({type: USER_LOADING})
}

export const setUserLogout = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

export const userRegister = () => (dispatch) => {
    dispatch({type: USER_REGISTER, payload: {msg: 'register page'}})
}