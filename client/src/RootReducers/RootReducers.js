import { combineReducers } from 'redux'

import auth from '../Reducers/AuthReducer'
import activities from '../Reducers/ActivitiesReducer'

export default combineReducers({
    auth, activities
})