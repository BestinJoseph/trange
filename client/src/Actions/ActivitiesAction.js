import { GET_ACTIVITIES, CREATE_ACTIVITY, PUT_ACTIVITY } from '../Constants/ActivityConstants'
import { getAllActivitiesApi, postDailyAct, putActivityApi } from '../Apis/TrackeApi'
import { Navigate } from 'react-router-dom'

//, GET_ACTIVITY, CREATE_ACTIVITY, UPDATE_ACTIVITY

export const getAllActivities = () => async (dispatch) => {
    const { data } = await getAllActivitiesApi()
    if( data.success === false) {
        return Navigate('/')
    }
    dispatch({type: GET_ACTIVITIES, payload: data})
}

export const postActivity = (newAct) => async (dispatch) => {
    const { data } = await postDailyAct(newAct)
    dispatch({type: CREATE_ACTIVITY, payload: data})
}

export const putActivity = (id, uAct) => async (dispatch) => {
    const { data } = await putActivityApi(id, uAct)
    dispatch({type: PUT_ACTIVITY, payload: data})
}