import { GET_ACTIVITIES } from '../Constants/ActivityConstants'
import { getAllActivitiesApi } from '../Apis/TrackeApi'

//, GET_ACTIVITY, CREATE_ACTIVITY, UPDATE_ACTIVITY

export const getAllActivities = () => async (dispatch) => {
    const { data } = await getAllActivitiesApi()
    dispatch({type: GET_ACTIVITIES, payload: data})
}