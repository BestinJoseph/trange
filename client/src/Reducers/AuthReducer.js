/* eslint-disable import/no-anonymous-default-export */
import { USER_LOGIN, USER_REGISTER, USER_LOGOUT }  from '../Constants/AuthConstants'
const initialState = {

}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case USER_LOGIN:
            return state
        case USER_REGISTER:
            return state
        case USER_LOGOUT:
            return state
        default:
            return state
    }
}