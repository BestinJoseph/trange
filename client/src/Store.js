import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './RootReducers/RootReducers'

const middleWares = [thunk]
const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWares)))

export default store
