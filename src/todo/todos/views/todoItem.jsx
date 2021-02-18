import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions'

const TodoItem = ({text, completed, toggleTodo, removeTodo}) => {
  return <div>
    <input type='checkbox' checked={completed} onChange={toggleTodo}/>
    {text}
    <button onClick={removeTodo}>x</button>
  </div>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: () => {
      const t = toggleTodo(ownProps.id)
      dispatch(t)
    },
    removeTodo: () => {
      dispatch(removeTodo(ownProps.id))
    }
  }
}
// const mapDispatchToProps = {
//   toggleTodo: toggleTodo,
//   removeTodo: removeTodo
// }

const connectCom = connect(null, mapDispatchToProps)(TodoItem);
connectCom.displayName = 'www'
export default connectCom;

