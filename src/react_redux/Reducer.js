import { INCREMENT, DECREMENT } from "./ActionTypes";

const reducer = (state, action) => {
  const { type, caption } = action;
  switch (type)
  {
    case INCREMENT:
      return {...state, [caption]: state[caption] + 1};;
    case DECREMENT:
      return {...state, [caption]: state[caption] - 1};
    default:
      return state;
  }
}

export default reducer;