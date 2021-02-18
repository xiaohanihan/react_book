import React from "react";

class CountDown extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { count: this.props.startCount }
  }

  componentDidMount () {
    this.intervalHandle = setInterval(() => {
      let newCount = this.state.count - 1;
      if (this.state.count > 0)
      {
        this.setState({ count: newCount })
      } else
      {
        window.clearInterval(this.intervalHandle)
      }
    }, 1000);
  }

  componentWillUnmount(){
    if(this.intervalHandle){
      window.clearInterval(this.intervalHandle)
    }
  }

  render(){
    return this.props.children(this.state.count)
  }

}

export default CountDown;