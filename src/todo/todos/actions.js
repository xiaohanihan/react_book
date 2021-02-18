import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addToDo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  completed: false
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})


