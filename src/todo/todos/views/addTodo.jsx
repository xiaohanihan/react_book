import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import { bindActionCreators } from 'redux';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (ele) => {
    this.setState({ todo: ele.target.value })
  }

  add = () => {
    this.props.addTodo(this.state.todo)
  }

  render () {
    return <div>
      <input onChange={this.onChange} />
      <button onClick={this.add}>添加</button>
    </div>
  }
}

// const mapDispatchToProps = dispatch => ({
//   addTodo: (text) => {
//     dispatch(addToDo(text))
//   }
// })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo: addToDo
}, dispatch)

export default connect(null, mapDispatchToProps)(AddTodo)