import { EventEmitter } from 'events';
import CounterStore from './CounterStore';
import AppDispatcher from "../AppDispatcher";
import { INCREMENT, DECREMENT } from '../ActionTypes';

const CHANGE_EVENT = 'changed';

function computeSummary (countValues) {
  let summary = 0;
  for (const key in countValues)
  {
    if (Object.hasOwnProperty.call(countValues, key))
    {
      summary += countValues[key]
    }
  }
  return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function () {
    return computeSummary(CounterStore.getCounterValues())
  },
  emitChanges: function () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

SummaryStore.dispatchToken = AppDispatcher.register(action => {
  if (action.type === INCREMENT || action.type === DECREMENT)
  {
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChanges();
  }
})

export default SummaryStore;