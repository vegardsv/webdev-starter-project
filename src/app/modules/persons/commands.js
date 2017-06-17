import actions from './actions'
import utils from './utils'
import settings from '../../settings'

// Move to utility-file
const promiseTo = effect =>
  new Promise(r => {
    r(effect())
  })

const server = url =>
  fetch(url, settings.getHeaders).then(response => response.json())

const setPersonsFilter = actions.setPersonFilter

const fetchPersons = () => (dispatch, getState) => {
  return server(settings.apiUrl)
    .then(data => utils.mapPersonList(data))
    .then(persons => dispatch(actions.setPersons(persons)))
}

const fetchPerson = id => (dispatch, getState) => {
  return promiseTo(() => dispatch(actions.fetchingPerson(true)))
    .then(() => server(settings.apiUrl + id))
    .then(person => dispatch(actions.setPerson(person)))
    .then(() => dispatch(actions.fetchingPerson(false)))
}

export default {
  fetchPersons,
  fetchPerson,
  setPersonsFilter
}
