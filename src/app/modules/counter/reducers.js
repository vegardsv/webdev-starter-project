import types from './types'
import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
      break
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.SET:
      return action.payload
  }
}

const reducers = combineReducers({ counter: counterReducer })

export default reducers
