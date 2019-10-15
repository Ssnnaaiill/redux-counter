import * as types from '../actions/ActionTypes';

// define initial state
const initialState = {
  number: 0,
  color: 'black'
};


/**
 * counter
 * - reducer function
 * @param state
 * @param action
 */

function counter(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}

export default counter;