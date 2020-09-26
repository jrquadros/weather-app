import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { RootReducer } from './reducers/RootReducer'

const middlewares = [thunk]

export const Store = createStore(RootReducer, applyMiddleware(...middlewares))
