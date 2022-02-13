/* eslint-disable import/no-anonymous-default-export */
import { GET_ERRORS } from '../Constants/AuthConstants'

const initialState = {}

export default (state=initialState, actions) => {
    switch (actions.type) {
        case GET_ERRORS:
            return actions.payload
        default:
            return state
    }
}