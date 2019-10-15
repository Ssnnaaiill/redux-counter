import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

// connect state value in store as props
const mapStateToProps = (state) => ({
  number: state.number,
  color: state.color
});

// create action and dispatch function, and connect them as props
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = 'black';  // temporary color setting
    dispatch(actions.setColor(color));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;