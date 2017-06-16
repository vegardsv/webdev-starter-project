import types from './types'
import { combineReducers } from 'redux'
import getTime from 'date-fns/get_time'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
      break
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
  }
}

const lastUpdateReducer = (state = '', action) => {
  switch (action.type) {
    case types.SET_UPDATED:
      return getTime(new Date())
  }

  return state
}

const reducers = combineReducers({
  num: counterReducer,
  updated: lastUpdateReducer
})

export default reducers
