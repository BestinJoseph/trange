import { USER_LOGIN, USER_REGISTER } from '../Constants/AuthConstants'

export const userLogin = () => (dispatch) => {
    dispatch({type: USER_LOGIN, payload: {msg: 'login page'}})
}

export const userRegister = () => (dispatch) => {
    dispatch({type: USER_REGISTER, payload: {msg: 'register page'}})
}