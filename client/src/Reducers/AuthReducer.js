/* eslint-disable import/no-anonymous-default-export */
import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, SET_CURRENT_USER, USER_LOADING }  from '../Constants/AuthConstants'
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case USER_LOGIN:
            return state
        case USER_REGISTER:
            return state
        case USER_LOGOUT:
            return state
        case SET_CURRENT_USER:
            return { ...state, isAuthenticated: true, user: actions.payload }
        case USER_LOADING:
            return { ...state, loading: false }
        default:
            return state
    }
}