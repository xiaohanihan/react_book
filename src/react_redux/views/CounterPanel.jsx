import React from 'react';
import Counter from "./Counter";
import { connect } from "react-redux";

function CounterPanel (props) {

  return (<div>
    <Counter caption='First'></Counter>
    <Counter caption='Second'></Counter>
    <Counter caption='Third'></Counter>
    <p>sum value: {props.value}</p>
  </div>)
}

function mapStateToProps (state, ownProps) {
  let sumValue = 0;
  for (const key in state)
  {
    if (Object.hasOwnProperty.call(state, key))
    {
      const value = state[key];
      sumValue += value;
    }
  }
  return {
    value: sumValue
  }
}

export default connect(mapStateToProps)(CounterPanel);