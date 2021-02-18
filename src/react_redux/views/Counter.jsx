import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Actions from "../Actions";

function Counter (props) {
  const { caption, value, onIncrement, onDecrement } = props;

  return (<div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <span>{caption} count: {value}</span>
  </div>)
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
}

function mapStateToProps (state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);