import types from './types'

const setPerson = data => ({
  type: types.SET_PERSON,
  payload: data
})

const setPersons = data => ({
  type: types.SET_PERSONS,
  payload: data
})

const fetchingPerson = isFetching => ({
  type: types.FETCHING_PERSON,
  payload: isFetching
})

const setPersonFilter = data => ({
  type: types.SET_PERSONS_FILTER,
  payload: data
})

export default {
  setPersons,
  setPerson,
  fetchingPerson,
  setPersonFilter
}
