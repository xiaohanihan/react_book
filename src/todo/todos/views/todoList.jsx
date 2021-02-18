import React from 'react';
import { connect } from 'react-redux';
import TodoItem from "./todoItem";
import { filters } from "../../filter";
import { selectVisibleTodos } from "../../selectors";

const TodoList = ({ toDos }) => {
  return <div>
    {toDos.map((item) => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
      >
      </TodoItem>))}
  </div>
}

// const selectVisibleTodos = (todos, filter) => {
//   const { ALL, COMPLETED, UNCOMPLETED } = filters
//   return todos.filter(item => {
//     switch (filter)
//     {
//       case ALL:
//         return true;
//       case COMPLETED:
//         return item.completed;
//       case UNCOMPLETED:
//         return !item.completed;
//       default:
//         return false;
//     }
//   })
// }

// const mapStateToProps = (state) => {
//   const todos = selectVisibleTodos(state.todos, state.filter);
//   return {
//     toDos: todos
//   }
// }

const mapStateToProps = (state) => {
  return {
    toDos: selectVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)

