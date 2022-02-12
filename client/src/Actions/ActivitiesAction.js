import { GET_ACTIVITIES } from '../Constants/ActivityConstants'
import { getAllActivitiesApi } from '../Apis/TrackeApi'
import { Navigate } from 'react-router-dom'

//, GET_ACTIVITY, CREATE_ACTIVITY, UPDATE_ACTIVITY

export const getAllActivities = () => async (dispatch) => {
    const { data } = await getAllActivitiesApi()
    if( data.success === false) {
        return Navigate('/')
    }
    dispatch({type: GET_ACTIVITIES, payload: data})
}