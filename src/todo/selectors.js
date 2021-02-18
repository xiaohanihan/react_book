import { createSelector } from "reselect";
import FilterTypes from "./filter/constants";

const getFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    const { ALL, COMPLETED, UNCOMPLETED } = FilterTypes;
    return todos.filter(item => {
      switch (filter)
      {
        case ALL:
          return true;
        case COMPLETED:
          return item.completed;
        case UNCOMPLETED:
          return !item.completed;
        default:
          return false;
      }
    })
  }
);