import { GET_ACTIVITIES } from '../Constants/ActivityConstants'
import { getAllActivitiesApi } from '../Apis/TrackeApi'

//, GET_ACTIVITY, CREATE_ACTIVITY, UPDATE_ACTIVITY

export const getAllActivities = () => async (dispatch) => {
    const { data } = await getAllActivitiesApi()
    console.log(data)
    dispatch({type: GET_ACTIVITIES, payload: {msg: 'nice activities.'}})
}