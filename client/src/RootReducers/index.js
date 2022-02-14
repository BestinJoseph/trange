import { combineReducers } from 'redux'

import auth from '../Reducers/AuthReducer'
import activities from '../Reducers/ActivitiesReducer'
import error from '../Reducers/ErrorReducer'

export default combineReducers({
    auth, activities, error
})