import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as toDoReducer } from "./todo/todos";
import { reducer as filterReducer } from "./todo/filter";
import immutable from "redux-immutable-state-invariant";
import { reducer as weatherReducer } from "./weather";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const win = window;

const middlewares = [];
if (process.env.NODE_ENV !== 'production')
{
  middlewares.push(immutable())
}
middlewares.push(thunk)

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// )

const storeEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
)

const reducers = combineReducers({
  todos: toDoReducer,
  filter: filterReducer,
  weather: weatherReducer
})

export default createStore(reducers, {}, storeEnhancers)

