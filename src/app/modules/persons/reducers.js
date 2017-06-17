import types from './types'
import { combineReducers } from 'redux'

const fetchingPersonReducer = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_PERSON:
      return action.payload
    default:
      return state
  }
}

const personReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_PERSON:
      return action.payload
    default:
      return state
  }
}

const personsFilterReducer = (state = '', action) => {
  switch (action.type) {
    case types.SET_PERSONS_FILTER:
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
  persons: personsReducer,
  fetchingPerson: fetchingPersonReducer,
  filter: personsFilterReducer
})

export default reducers
