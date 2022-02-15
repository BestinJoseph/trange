/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from "redux-thunk"

import rootReducer from './RootReducers'

const primary = {
    key:'main-root',
    storage
}

const persistedReducer = persistReducer(primary, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
