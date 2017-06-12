import * as actions from '../actions/counterActions'

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
      break
    case actions.INCREMENT:
      return state + 1
    case actions.DECREMENT:
      return state - 1
  }
}
