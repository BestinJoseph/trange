/* eslint-disable import/no-anonymous-default-export */
import { GET_ACTIVITIES } from '../Constants/ActivityConstants'
const initialState = {
    activities: []
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVITIES:
            return [state, ...actions.payload]
        default:
            return state
    }
}