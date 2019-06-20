import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import dashboardReducer from './dashboard'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default createStore(
  dashboardReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware),
    loggingMiddleware
  ))
)
