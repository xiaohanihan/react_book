import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    caption: counterCaption
  }
}

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    caption: counterCaption
  }
}