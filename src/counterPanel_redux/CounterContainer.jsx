import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import this.context.store from "../redux/Store";
import * as Actions from "../redux/Actions";
import Counter from "./Counter";

class CounterContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.onClickUpdateBtn = this.onClickUpdateBtn.bind(this)
    this.onchange = this.onchange.bind(this)
    this.getOwnState = this.getOwnState.bind(this)

    this.state = this.getOwnState();
  }

  getOwnState () {
    const val = this.context.store.getState()
    return { value: val[this.props.caption] }
  }

  componentDidMount () {
    this.context.store.subscribe(this.onchange)
  }

  componentWillUnmount () {
    this.context.store.unsubscribe(this.onchange)
  }

  onClickUpdateBtn (isIncrement) {
    const { caption } = this.props
    if (isIncrement)
    {
      this.context.store.dispatch(Actions.increment(caption))
    } else
    {
      this.context.store.dispatch(Actions.decrement(caption))
    }
  }

  onchange () {
    const v = this.getOwnState()
    this.setState(v)
  }

  render () {
    const { caption, value } = this.state;
    return (<div>
      <Counter caption={caption} value={value} onClickUpdateBtn={this.onClickUpdateBtn}></Counter>
    </div>)
  }

}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired,

}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer;