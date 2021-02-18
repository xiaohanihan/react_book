import React, { Component } from 'react';
// import Counter from './Counter';
// import Store from "../redux/Store";
import CounterContainer from "./CounterContainer";
import PropTypes from 'prop-types';

function CounterPanel (props) {

  return (<div>
    <CounterContainer caption='First'></CounterContainer>
    <CounterContainer caption='Second'></CounterContainer>
    <CounterContainer caption='Third'></CounterContainer>
    <p>sum value: {props.sumValue}</p>
  </div>)
}

class CounterPanelContainer extends Component {
  constructor(props,context) {
    super(props,context)
    // this.onUpdate = this.onUpdate.bind(this)
    this.onchange = this.onchange.bind(this)
    // const sumValue = this.initValues.reduce((a, b) => a + b, 0)
    this.state = {
      sumValue: this.getSumState()
    }
  }

  // getSumState () {
  //   let sumValue = 0;
  //   for (const key in Store.getState())
  //   {
  //     if (Object.hasOwnProperty.call(Store.getState(), key))
  //     {
  //       const value = Store.getState()[key];
  //       sumValue += value;
  //     }
  //   }
  //   return sumValue
  // }

  getSumState () {
    
    let sumValue = 0;
    for (const key in this.context.store.getState())
    {
      if (Object.hasOwnProperty.call(this.context.store.getState(), key))
      {
        const value = this.context.store.getState()[key];
        sumValue += value;
      }
    }
    return sumValue
  }

  componentDidMount () {
    this.context.store.subscribe(this.onchange)
  }

  componentWillUnmount () {
    this.context.store.unsubscribe(this.onchange)
  }

  onchange () {
    this.setState({ sumValue: this.getSumState() })
  }

  render () {
    
    return (
      <CounterPanel sumValue={this.state.sumValue}></CounterPanel>
    )
  }
}

CounterPanelContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterPanelContainer;