import types from './types'
import { combineReducers } from 'redux'

const personReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PERSON:
      return action.payload
    default:
      return state
  }
}

const personsReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_PERSONS:
      return action.payload
    default:
      return state
  }
}

const reducers = combineReducers({
  selected: personReducer,
  persons: personsReducer
})

export default reducers
