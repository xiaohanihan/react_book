import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from '../flux/stores/CounterStore';
// import { increment, decrement } from '../flux/Actions';
import * as Actions from "../flux/Actions";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.onClickUpdateBtn = this.onClickUpdateBtn.bind(this)
    this.onchange = this.onchange.bind(this)

    const initValue = CounterStore.getCounterValues()
    this.state = {
      caption: props.caption,
      value: initValue[props.caption]
    }
  }

  componentDidMount () {
    CounterStore.addChangeListener(this.onchange)
  }

  componentWillUnmount () {
    CounterStore.removeChangeListener(this.onchange)
  }

  onClickUpdateBtn (isIncrement) {
    if (isIncrement)
    {
      Actions.increment(this.state.caption)
    } else
    {
      Actions.decrement(this.state.caption)
    }
  }

  onchange () {
    const newValue = CounterStore.getCounterValues()[this.state.caption];
    this.setState({ value: newValue })
  }

  render () {
    const { caption, value } = this.state;
    return <div>
      <button onClick={() => this.onClickUpdateBtn(true)}>+</button>
      <button onClick={() => this.onClickUpdateBtn(false)}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  // initValue: PropTypes.number,
  // onUpdate: PropTypes.func
}

// Counter.defaultProps = {
//   initValue: 0,
//   onUpdate: f => f
// };

export default Counter;