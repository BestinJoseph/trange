/* eslint-disable import/no-anonymous-default-export */
import { GET_ACTIVITIES, CREATE_ACTIVITY } from '../Constants/ActivityConstants'
const initialState = {
    activities: []
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVITIES:
            return [ ...state.activities, ...actions.payload ]
        case CREATE_ACTIVITY:
            console.log(state.activities)
            return state.activities.push(actions.payload)
        default:
            return state
    }
}