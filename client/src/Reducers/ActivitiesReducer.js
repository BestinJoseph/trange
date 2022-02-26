/* eslint-disable import/no-anonymous-default-export */
import { GET_ACTIVITIES, CREATE_ACTIVITY, PUT_ACTIVITY } from '../Constants/ActivityConstants'
const initialState = {
    activities: []
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVITIES:
            return { ...state, activities: actions.payload }
        case CREATE_ACTIVITY:
            return [ actions.payload, ...state]
        case PUT_ACTIVITY:
            return { ...state, activities: state.activities.map( acti => acti._id === actions.payload.track._id ? actions.payload.track : acti)}
        default:
            return state
    }
}
