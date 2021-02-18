import React, { Component } from 'react';
import Counter from './Counter';
import SummaryStore from '../flux/stores/SummaryStore'

class CounterPanel extends Component {
  constructor(props) {
    super(props)
    // this.onUpdate = this.onUpdate.bind(this)
    this.onchange = this.onchange.bind(this)
    const sumVal = SummaryStore.getSummary()
    // const sumValue = this.initValues.reduce((a, b) => a + b, 0)
    this.state = {
      sumValue: sumVal
    }
  }

  componentDidMount(){
    SummaryStore.addChangeListener(this.onchange)
  }

  onchange(){
    this.setState({ sumValue: SummaryStore.getSummary() })
  }

  // onUpdate (value, newValue) {
  //   this.setState({ sumValue: this.state.sumValue + (newValue - value) })
  // }

  render () {
    return (
      <div>
        <Counter caption='First'></Counter>
        <Counter caption='Second'></Counter>
        <Counter caption='Third'></Counter>
        <p>sum value: {this.state.sumValue}</p>
      </div>
    )
  }
}

export default CounterPanel;