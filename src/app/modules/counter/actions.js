import types from './types'

const increment = () => ({ type: types.INCREMENT })
const decrement = () => ({ type: types.DECREMENT })
const set = value => ({ type: types.SET, payload: value })
export default {
  increment,
  decrement,
  set
}
