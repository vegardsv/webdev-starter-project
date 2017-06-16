import actions from './actions'

let promiseTo = effect =>
  new Promise(r => {
    r(effect())
  })

const increment = () => (dispatch, getState) => {
  return promiseTo(() => dispatch(actions.increment())).then(() =>
    dispatch(actions.setUpdated())
  )
}

const decrement = actions.decrement

export default {
  increment,
  decrement
}
