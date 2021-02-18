import { WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_ERROR } from "./actionTypes";
import { LOADING, SUCCESS, ERROR } from "./weatherStatus";

const reducer = (state = { status: LOADING }, action) => {
  switch (action.type)
  {
    case WEATHER_LOADING:
      return { status: LOADING }
    case WEATHER_SUCCESS:
      return { status: SUCCESS, weatherInfo: action.result }
    case WEATHER_ERROR:
      return { status: ERROR }
    default:
      return state;
  }
}

export default reducer