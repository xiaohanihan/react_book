import { WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_ERROR } from "./actionTypes";

export const fetchWeatherLoading = () => ({
  type: WEATHER_LOADING
})
export const fetchWeatherSuccess = (result) => ({
  type: WEATHER_SUCCESS,
  result
})
export const fetchWeatherError = () => ({
  type: WEATHER_ERROR
})