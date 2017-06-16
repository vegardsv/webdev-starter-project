import types from './types'

const increment = () => ({ type: types.INCREMENT })
const decrement = () => ({ type: types.DECREMENT })
const setUpdated = () => ({ type: types.SET_UPDATED })

export default {
  increment,
  decrement,
  setUpdated
}
