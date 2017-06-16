import types from './types'

const setPerson = data => ({
  type: types.SET_PERSON,
  payload: data
})

const setPersons = data => ({
  type: types.SET_PERSONS,
  payload: data
})

export default {
  setPersons,
  setPerson
}
