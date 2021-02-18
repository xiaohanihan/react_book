import { connect } from "react-redux";
import { setFilter } from "../actions";
import FilterTypes from "../constants";

const Filter = ({setFilter}) => {
  const {ALL, COMPLETED, UNCOMPLETED} = FilterTypes;
  console.log(setFilter)
  return <div>
    <button onClick={() => setFilter(ALL)}>{ALL}</button>
    <button onClick={() => setFilter(COMPLETED)}>{COMPLETED}</button>
    <button onClick={() => setFilter(UNCOMPLETED)}>{UNCOMPLETED}</button>
  </div>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: (filterType) => {
      return dispatch(setFilter(filterType))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter);