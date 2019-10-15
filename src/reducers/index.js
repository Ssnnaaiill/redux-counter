import * as types from '../actions/ActionTypes';

// define initial state
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
}


/**
 * counter
 * - reducer function
 * @param {*} state 
 * @param {*} action 
 */

function counter(state = initialState, action) {
  // create reference
  const { counters } = state;

  switch(action.type) {
    // add new counter
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        // exclude last counter using slice
        counters: counters.slice(0, counters.length - 1)
      };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slick(action.index - 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
};

export default counter;