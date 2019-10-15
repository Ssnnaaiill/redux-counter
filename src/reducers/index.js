import number from './number';
import color from './color';
import { combineReducers } from 'redux';

// combine sub reducers (color, number)
const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;