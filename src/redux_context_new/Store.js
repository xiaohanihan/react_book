import { createStore } from "redux";
import Reducer from "./Reducer";

const initValues = {
  'First': 2,
  'Second': 3,
  'Third': 9,
}
const store = createStore(Reducer, initValues)
export default store;
