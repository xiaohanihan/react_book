import { INCREMENT, DECREMENT } from "./ActionTypes";

const reducer = (state, action) => {
  const { type, caption } = action;
  switch (type)
  {
    case INCREMENT:
      state[caption]++
      return state;
    case DECREMENT:
      state[caption]--
      return state;
    default:
      return state;
  }
}

export default reducer;