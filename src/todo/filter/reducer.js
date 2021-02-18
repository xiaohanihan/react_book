import { SET_FILTER } from "./actionTypes";
import FilterTypes from "./constants";
const {ALL, COMPLETED, UNCOMPLETED} = FilterTypes;

const reducer = (state = ALL, action) => {
  switch (action.type)
  {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default reducer