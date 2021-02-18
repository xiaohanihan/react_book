import React from "react"
import { connect } from "react-redux";
import { LOADING, SUCCESS, ERROR } from "../weatherStatus";

const Weather = ({ status, weatherInfo }) => {
  switch (status)
  {
    case LOADING:
      return <div>正在加载中</div>
    case SUCCESS:
      return <div>当前天气为</div>
    case ERROR:
      return <div>获取天气信息出错</div>
    default:
      return null
  }
}

const mapStateToProps = (state) => state.weather

export default connect(mapStateToProps)(Weather)